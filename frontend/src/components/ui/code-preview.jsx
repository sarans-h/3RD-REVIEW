import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const CodePreview = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        toast.success('Code copied to clipboard!');
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative rounded-lg overflow-hidden border border-white/10">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 text-white border-b border-white/10">
                <span className="text-sm font-mono">embed.js</span>
                <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-2 text-sm hover:text-gray-300"
                >
                    {copied ? (
                        <Check size={16} className="text-green-500" />
                    ) : (
                        <Copy size={16} />
                    )}
                </button>
            </div>
            <div className="max-h-[600px] overflow-y-auto bg-white/5">
                <pre className="p-4 text-sm text-white font-mono whitespace-pre-wrap">
                    {code}
                </pre>
            </div>
            <Toaster />
        </div>
    );
};

export default CodePreview;
