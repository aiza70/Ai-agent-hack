import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ActionCards from '../components/ActionCards';
import MatchResultCard from '../components/MatchResultCard';
import PromptInput from '../components/PromptInput';

// Mock list of hackathons to render dynamically
const INITIAL_MATCHES = [
  {
    id: 1,
    title: "Global AI Web Innovators 2026",
    matchPercentage: 95,
    locationType: "Remote",
    dates: "Aug 12 - Aug 15",
    prizePool: "$10,000",
    isBeginnerFriendly: true,
    fitReason: "Perfect for React/Django full-stack development.",
    skillGap: "Learning FastAPI basics gives you an edge."
  }
];

export default function Dashboard() {
  // 1. State for holding hackathon results dynamically
  const [matches, setMatches] = useState(INITIAL_MATCHES);

  // 2. State for holding the attached resume file
  const [uploadedResume, setUploadedResume] = useState(null);

  // 3. Handler function when a file is picked in PromptInput
  const handleFileSelect = (file) => {
    setUploadedResume(file);
    console.log("Uploaded file saved in Dashboard state:", file.name);
  };

  return (
    <div className="flex min-h-screen bg-[#0f1420] text-slate-100 font-sans antialiased">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-8 max-w-5xl mx-auto flex flex-col justify-between">
        <div>
          {/* Header Title */}
          <header className="mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              👋 Hello, Aiza! Ready to find your next hackathon?
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Analyze your resume or type your skills below:
            </p>
          </header>

          {/* Action Cards */}
          <ActionCards />

          {/* Dynamic Results Feed */}
          <div className="mt-6">
            {matches.map((match) => (
              <MatchResultCard key={match.id} match={match} />
            ))}
          </div>
        </div>

        {/* Input Bar with file handler attached */}
        <div className="mt-6">
          <PromptInput onFileSelect={handleFileSelect} />
        </div>
      </main>
    </div>
  );
}