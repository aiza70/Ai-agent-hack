import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ActionCards from '../components/ActionCards';
import MatchResultCard from '../components/MatchResultCard';
import PromptInput from '../components/PromptInput';

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
  const [matches, setMatches] = useState(INITIAL_MATCHES);
  const [uploadedResume, setUploadedResume] = useState(null);

  const handleFileSelect = (file) => {
    setUploadedResume(file);
    console.log("Uploaded file saved in Dashboard state:", file.name);
  };

  // Handler for receiving submitted skills
  const handleSkillSubmit = ({ textQuery, file }) => {
    console.log("Submitted query:", textQuery);
    console.log("Submitted file:", file?.name);

    // Dynamic Mock Match Result based on input
    const newMatch = {
      id: Date.now(),
      title: textQuery ? `Hackathon Matched for: "${textQuery}"` : "Resume Matched Hackathon",
      matchPercentage: 92,
      locationType: "Remote",
      dates: "Sep 01 - Sep 05",
      prizePool: "$15,000",
      isBeginnerFriendly: true,
      fitReason: `Matched based on skills/resume submitted: ${textQuery || file?.name}`,
      skillGap: "Next.js & GraphQL basics."
    };

    // Prepend new match to the results list
    setMatches((prevMatches) => [newMatch, ...prevMatches]);
  };

  return (
    <div className="flex min-h-screen bg-[#0f1420] text-slate-100 font-sans antialiased">
      <Sidebar />

      <main className="flex-1 p-8 max-w-5xl mx-auto flex flex-col justify-between">
        <div>
          <header className="mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              👋 Hello, Aiza! Ready to find your next hackathon?
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Analyze your resume or type your skills below:
            </p>
          </header>

          <ActionCards />

          <div className="mt-6">
            {matches.map((match) => (
              <MatchResultCard key={match.id} match={match} />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <PromptInput 
            onFileSelect={handleFileSelect} 
            onSubmitSkills={handleSkillSubmit} 
          />
        </div>
      </main>
    </div>
  );
}