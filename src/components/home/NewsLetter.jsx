import React, { useState, useEffect } from 'react'
import { FiMail } from "react-icons/fi";

const NewsLetter = () => {

    const [email, setEmail] = useState("");
    const [joined, setJoined] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleJoin = () => {

        if (!email) {
            setError("Please enter your email");
            return;
        }

        setError("");
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setJoined(true);
            setEmail("");
        }, 1000);
    };

    useEffect(() => {
        if (joined) {
            const timer = setTimeout(() => {
                setJoined(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [joined]);

    return (
        <div className="relative overflow-hidden rounded-2xl bg-black text-white p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]"></div>

            <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-white/70">Ponytelle Insider</span>
                <h3 className="text-3xl font-bold mt-2 mb-3">Join Our Beauty Circle</h3>

                <p className="text-white/80 mb-6">
                    Be the first to get exclusive deals, new drops, and styling tips.
                </p>

                {!joined ? (
                    <>
                        <div className="flex gap-2">
                            <div className="relative w-full">
                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 border border-white/20 placeholder:text-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                                />
                            </div>

                            <button
                                onClick={handleJoin}
                                className="shrink-0 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition"
                            >
                                {loading ? <div className='w-6 h-6 border-2 border-black border-t-transparent animate-spin rounded-full'></div>
                                    : "Join"
                                 }
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-400 text-sm mt-2">{error}</p>
                        )}
                    </>
                ) : (
                    <div className="mt-3 text-sm text-white/80 font-medium flex items-center gap-2">
                        You're in. Welcome to the Ponytelle beauty circle.
                    </div>
                )}

                <p className="mt-4 text-xs text-white/60">
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </div>
    )
}

export default NewsLetter