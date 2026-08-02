import React, { useRef, useState } from 'react';
import { Paperclip, ArrowRight, FileText, X } from 'lucide-react';

export default function PromptInput({ onFileSelect, onSubmitSkills }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  // Track typed text state
  const [skillText, setSkillText] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      if (onFileSelect) onFileSelect(file);
    } else if (file) {
      alert("Please upload a PDF document.");
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skillText.trim() && !selectedFile) {
      alert("Please enter skills or attach a resume.");
      return;
    }

    if (onSubmitSkills) {
      onSubmitSkills({ textQuery: skillText, file: selectedFile });
    }

    // Reset input field after submission
    setSkillText('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#181d2e] border border-slate-800 rounded-xl p-2 flex flex-col gap-2">
      {/* Attached File Preview Tag */}
      {selectedFile && (
        <div className="flex items-center gap-2 bg-indigo-950/60 text-indigo-300 text-xs px-3 py-1.5 rounded-lg border border-indigo-800/50 w-fit">
          <FileText size={14} />
          <span className="font-medium max-w-[200px] truncate">{selectedFile.name}</span>
          <button type="button" onClick={removeFile} className="hover:text-white ml-1">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Input controls */}
      <div className="flex items-center gap-2 px-2">
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept=".pdf" 
          className="hidden" 
        />
        
        <button 
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="text-slate-400 hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
          title="Attach Resume (PDF)"
        >
          <Paperclip size={18} />
        </button>

        {/* Bound Input */}
        <input 
          type="text" 
          value={skillText}
          onChange={(e) => setSkillText(e.target.value)}
          placeholder="Type your skills or upload resume..." 
          className="w-full bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
        />

        <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-lg transition-colors">
          <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
}