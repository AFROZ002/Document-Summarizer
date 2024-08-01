File Upload and Summarization Application
Overview
This project consists of a full-stack application that allows users to upload documents (PDF, DOCX, TXT) and get summaries of their contents. It includes a backend service built with Express.js and a frontend application developed with React.

Submission Requirements
Backend (Node.js with Express)
Tasks:
Set up a basic Express.js application.
Implement file handling and storage.
Integrate a pre-trained LLM (e.g., GPT-2 or a smaller model suitable for local deployment).
Implement a /upload endpoint to handle file uploads (PDF, DOCX, TXT).
Implement a /summarize endpoint to process and summarize the document using the locally hosted LLM.
Ensure the backend can handle multiple concurrent requests.
Evaluation Criteria:
Code quality and structure.
Correct implementation of endpoints.
Handling of file uploads and errors.
Efficiency and performance of the summarization process.
Frontend (React)
Tasks:
Set up a React application using Create React App or a similar tool.
Create a form for file uploads.
Implement API calls to the backend for file upload and summarization.
Display the uploaded file’s content.
Display the summarized text in a user-friendly manner.
Evaluation Criteria:
Code quality and structure.
User interface design and responsiveness.
Correct implementation of API calls.
Error handling and user feedback.
LLM Deployment
Tasks:
Set up a local environment for the LLM (use Docker if possible).
Load the pre-trained model and ensure it can generate text summaries.
Integrate the model with the backend to handle summarization requests.
Evaluation Criteria:
Correct deployment and integration of the LLM.
Performance and efficiency of the model.
Quality of the generated summaries.
Setup Instructions


git clone <repository-url>
cd backend

npm install

npm start

git clone <repository-url>
cd frontend

npm install

npm install

Approach and Challenges
Approach
Backend:

Developed using Express.js.
Integrated file handling and a pre-trained LLM for summarization.
Frontend:

Created with React.
Implemented file upload and API interaction for file processing and summarization.
LLM Deployment:

Deployed a pre-trained LLM locally using Docker.
Challenges and Solutions
Handling Concurrent Requests: Implemented asynchronous processing in the backend.
Model Integration: Configured the LLM to work efficiently with the backend service.
File Upload and Processing: Ensured robust file handling and error management.
