"use client";

import { FileIcon, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  language: string;
  filename: string;
  lightTheme: string;
  darkTheme: string;
}

export default function CodeComparison({
  beforeCode,
  afterCode,
  language,
  filename,
  lightTheme,
  darkTheme,
}: CodeComparisonProps) {
  const [highlightedBefore, setHighlightedBefore] = useState("");
  const [highlightedAfter, setHighlightedAfter] = useState("");

  useEffect(() => {
    setHighlightedBefore(beforeCode);
    setHighlightedAfter(afterCode);
  }, [beforeCode, afterCode, language, lightTheme, darkTheme]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className="h-full overflow-auto bg-white/5 text-white font-mono text-xs [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <div className="h-[100vh] overflow-auto break-all bg-white/5  text-white p-4 font-mono text-xs">
        ""  {code}""
        </div>
      );
    }
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  return (
    <div className="mx-auto w-full max-w-5xl  p-6 border border-white rounded-lg overflow-hidden">
      <div>
        <div className="flex items-center bg-white/5 p-2  text-sm text-white">
          <FileIcon className="mr-2 h-4 w-4" />
          {filename}
          <Copy
            className="ml-auto h-4 w-4 cursor-pointer"
            onClick={() => copyToClipboard(beforeCode)}
          />
        </div>
        {renderCode(beforeCode, highlightedBefore)}
      </div>
      <Toaster toastOptions={{
                className: '',
                style: {
                    height: '40px',
                    background: '#151719',
                    color: 'white',
                    border: '1px solid white',
                },
            }} />
    </div>
  );
}
