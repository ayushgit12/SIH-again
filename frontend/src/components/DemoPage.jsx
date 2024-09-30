import React, { useEffect } from 'react';
import axios from 'axios';

function DemoPage() {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const data = {
                x: event.clientX,
                y: event.clientY,
                timestamp: Date.now(),
            };
            axios.post('http://localhost:5000/api/interaction/mouse-data', data)
                .then(response => console.log(response.data.message))
                .catch(error => console.log('Bot detected'));
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white shadow-lg rounded-lg animate-fade-in">
                <h1 className="text-3xl font-bold mb-6">Human Verification Demo</h1>
                <p className="text-lg mb-4">Move your mouse to interact with the system.</p>
            </div>
        </div>
    );
}

export default DemoPage;