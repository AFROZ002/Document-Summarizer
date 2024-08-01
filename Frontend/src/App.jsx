import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ReactMarkdown from 'react-markdown';
import SummaryDisplay from './components/SummaryDisplay';

function App() {
    const [answer, setAnswer] = useState('');

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">File Upload and Summary</h1>
            <FileUpload setAnswer={setAnswer} />
            {answer && (
                <div className="result mt-4">
                    <SummaryDisplay summary={answer} />
                </div>
            )}
        </div>
    );
}

export default App;
