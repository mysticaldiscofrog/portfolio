// src/components/YouTubeForm.tsx

"use client";

import { useState } from 'react';

export default function YouTubeForm() {
    const [url, setUrl] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setResult('');
        setError('');

        try {
            const response = await fetch('/api/extract-wisdom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            const data = await response.json();

            if (response.ok) {
                setResult(data.result);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Something went wrong.');
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-purple-700 mb-4">YouTube Wisdom Extractor</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700">Enter YouTube URL</label>
                    <input
                        type="text"
                        name="url"
                        id="url"
                        className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        placeholder="https://youtube.com/watch?v=..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Extract Wisdom
                    </button>
                </div>
            </form>
            {result && <pre className="mt-2 p-4 bg-gray-100 rounded-lg shadow-inner">{result}</pre>}
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        </div>
    );
}
