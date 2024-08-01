import React from 'react';

const SummaryDisplay = ({ summary }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p>{summary}</p>
        </div>
    );
};

export default SummaryDisplay;
