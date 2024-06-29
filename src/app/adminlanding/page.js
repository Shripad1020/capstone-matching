"use client";

import React from 'react';

export default function ClientComponent() {
  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-11/12 text-center relative">
        <button
          
          className="bg-code-maroon text-white py-2 px-4 rounded absolute left-0"
        >
          Log Out
        </button>
        <h1 className="text-3xl font-bold mb-8 mt-12">
          Welcome, Admin!
        </h1>
        <div className="grid gap-4 justify-center">
          <a href="/manageprof" className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10">Manage Professors/Admins</a>
          <a href="/managestudents" className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10">Manage Students</a>
          <a href="/projects" className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10">Manage Projects</a>
          <a href="/results" className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10">View Match Results</a>
          <a href="/changeweights" className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10">Manage Score Weights</a>
          <a href="/manageCourses" className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10">Manage Courses</a>
          <a href="/prof_projects_ranking" className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10">Submit Project Preferences</a>
          <a href="/viewProfProjectPreferences" className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10">View Professor Project Preferences</a>
          <a href="/configuration" className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10">Configuration</a>
          <button
            onClick={() => console.log('Export Database')}
            className="bg-code-maroon text-white py-2 px-4 rounded w-80 h-10"
          >
            Export Database
          </button>
        </div>
      </div>
    </div>
  );
}
