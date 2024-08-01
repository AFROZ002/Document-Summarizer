import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ setAnswer }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const uploadResponse = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const generateResponse = await axios.post('http://localhost:3000/generate', {
                question: uploadResponse.data.content,
            });

            setAnswer(generateResponse.data.answer);
        } catch (error) {
            console.error('Error during file upload or summarization', error);
            setAnswer('Sorry - Something went wrong. Please try again!');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
            <input type="file" onChange={handleFileChange} className="mb-4 p-2 border border-gray-300 rounded-lg" />
            <button
                onClick={handleFileUpload}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
                Upload and Generate Answer
            </button>
        </div>
    );
};

export default FileUpload;
