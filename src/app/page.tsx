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
        <>
            <div className="mt-8 bg-white shadow-md rounded-lg p-6 space-y-6">
                <h2 className="text-xl font-bold text-purple-700">Studio Create- Integrating Vision, Technology, and Sustainability</h2>
                <p className="text-gray-700">"Bridging innovation and practicality for a sustainable future"</p>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">About Studio Create:</h3>
                    <p className="text-gray-700">Visionary systems integrators, designers, and sustainability advocates. With many diverse backgrounds, we bring a unique and holistic approach to solving complex challenges.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Ethos:</h3>
                    <p className="text-gray-700">"Function is beautiful. Sustainability is essential. Knowledge should be accessible to all."</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Initiatives:</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-md font-semibold text-purple-700">1. cibusaqua.casa: The Global Knowledge Nexus</h4>
                            <p className="text-gray-700">"Cultivating Wisdom, Harvesting Change"</p>
                            <p className="text-gray-700">cibusaqua.casa is a living, breathing ecosystem of global wisdom. Here, knowledge transcends borders, adapting to local needs while addressing universal challenges. Our geo-tagged system ensures that solutions are always culturally relevant and practically applicable. By contributing insights, you're not just sharing information – you're catalyzing change on a global scale.</p>
                            <p className="text-gray-700">"In a world drowning in information, cibusaqua.casa is your lifeline to actionable wisdom."</p>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-purple-700">2. Datafied Foresight: Illuminating the Path Ahead</h4>
                            <p className="text-gray-700">"Where Data Whispers, We Listen"</p>
                            <p className="text-gray-700">We translate complexity into clarity, uncertainty into opportunity. By analyzing global trends and their ripple effects, we provide a crystal ball for strategic decision-making. We dive deep into organizational DNA, identifying inefficiencies and untapped potential. With us, you're not just preparing for the future – you're actively shaping it.</p>
                            <p className="text-gray-700">"We don't just predict the future. We help you shape it."</p>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-purple-700">3. Digital Fortification: Securing the Unseen Realm</h4>
                            <p className="text-gray-700">"Your Digital Citadel Awaits"</p>
                            <p className="text-gray-700">In today's hyperconnected world, your home network is the new frontier of personal security. We build digital fortresses for those who can't afford to be vulnerable. Our solutions are comprehensive security ecosystems that adapt to your lifestyle, anticipating threats before they materialize.</p>
                            <p className="text-gray-700">"Because in the digital age, your home network is your castle's keep."</p>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-purple-700">4. Gaia's Engineers: Crafting Tomorrow's Environment</h4>
                            <p className="text-gray-700">"Breathing Life Back into Mother Earth"</p>
                            <p className="text-gray-700">We're reimagining humanity's relationship with nature. Our environmental systems blend cutting-edge technology with time-tested natural processes to create scalable, sustainable solutions. From carbon sequestration to waste transformation, we're pioneering approaches that actively regenerate our planet.</p>
                            <p className="text-gray-700">"We're not just reducing our footprint. We're leaving a positive imprint."</p>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-purple-700">5. Elite Courier: Discretion in Motion</h4>
                            <p className="text-gray-700">"When 'Handle with Care' Isn't Enough"</p>
                            <p className="text-gray-700">Elite Courier is the pinnacle of discrete, high-security logistics. We understand that true luxury lies in flawless execution and ironclad trust. Our team treats each item as if it were the crown jewels, ensuring your most valuable possessions move across the world as if they never left your sight.</p>
                            <p className="text-gray-700">"Because some deliveries are too important for ordinary hands."</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Vision:</h3>
                    <p className="text-gray-700">Studio Create's journey is to foster a unique perspective on the interconnectedness of our world. We create functional, beautiful solutions that address real-world problems, spanning individual, corporate, and global scales.</p>
                    <p className="text-gray-700">We're committed to bridging the gap between visionary concepts and practical implementation, laying the groundwork for meaningful, sustainable change. Join us in creating a future where technology and nature work in harmony, where knowledge is freely accessible, and where sustainability is at the core of every decision.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Connect:</h3>
                    <p className="text-gray-700">@destinyisearned</p>
                </div>
            </div>

            {/* The rest of your YouTubeForm component (form for URL submission) */}
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
        </>
    );
}
