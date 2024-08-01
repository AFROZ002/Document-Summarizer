const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

app.use(cors({
    origin: 'http://localhost:5173',  // Frontend URL
}));
app.use(express.json());

// Endpoint to handle file upload
app.post('/upload', upload.single('file'), async (req, res) => {
    if (req.file) {
        const filePath = req.file.path;
        const fileExtension = path.extname(req.file.originalname).toLowerCase();

        if (fileExtension === '.pdf') {
            try {
                const dataBuffer = fs.readFileSync(filePath);
                const data = await pdf(dataBuffer);
                fs.unlinkSync(filePath);  // Remove file after processing
                res.json({ content: data.text });
            } catch (error) {
                console.error('Error parsing PDF file', error);
                fs.unlinkSync(filePath);  // Remove file on error
                res.status(500).send('Error reading PDF file');
            }
        } else {
            fs.unlinkSync(filePath);  // Remove file if not a PDF
            res.status(400).send('Invalid file type. Only PDF files are accepted.');
        }
    } else {
        res.status(400).send('No file uploaded');
    }
});

// Endpoint to generate content using Google Gemini API
app.post('/generate', async (req, res) => {
    const { question } = req.body;
    const formattedQuestion = `Summarize the below PDF contents:\n\n${question}`;
    // to the question variable infront I want to add "Summarise the below PDF contents" at the begining
    if (!question) {
        return res.status(400).send('No question provided');
    }

    try {
        const response = await axios.post(`
            https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=Your APi key`,
            {
                contents: [{ parts: [{ text: formattedQuestion }] }],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const answer = response.data.candidates[0].content.parts[0].text;
        res.json({ answer });
    } catch (error) {
        console.error('Error generating content', error);
        res.status(500).send('Error generating content');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});