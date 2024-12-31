import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Unit Project: Creating My Financial Goals Roadmap</h1>
      <p className="text-lg text-center mb-6">
        Apply what you've learned to create your personal Financial Goals Roadmap.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
      <p className="text-lg mb-4">
        In this project, you'll create a personal Financial Goals Roadmap. Follow these steps:
      </p>
      <ol className="list-decimal list-inside text-lg mb-4">
        <li>Review your goals: Look at all the goals you've identified so far.</li>
        <li>Select and refine: Choose 5-7 goals, ensuring a mix of short, medium, and long-term objectives. Refine each goal using the principles we've discussed.</li>
        <li>Plan your approach: For each goal, outline:
          <ul className="list-disc list-inside ml-8">
            <li>Specific steps you'll take to achieve it</li>
            <li>Potential obstacles and strategies to overcome them</li>
            <li>How you'll track your progress</li>
          </ul>
        </li>
        <li>Visualize your goals: Create a visual representation of your goals (e.g., a timeline, vision board, or mind map)</li>
        <li>Reflect: Write a brief reflection on how achieving these goals will impact your life</li>
      </ol>
      <h2 className="text-3xl font-semibold mb-4">Tips for Success</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Use the SMART criteria to refine your goals</li>
        <li>Consider potential obstacles and plan strategies to overcome them</li>
        <li>Be realistic about your current circumstances and resources</li>
        <li>Align your goals with your personal values and long-term aspirations</li>
        <li>Don't hesitate to seek advice from trusted adults or financial experts</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Submission Guidelines</h2>
      <p className="text-lg mb-4">
        Your Financial Goals Roadmap should include:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>A list of your 5-7 refined financial goals</li>
        <li>A detailed plan for each goal, including steps, potential obstacles, and tracking methods</li>
        <li>A visual representation of your goals</li>
        <li>A brief reflection (300-500 words) on the impact of achieving these goals</li>
      </ul>
      <p className="text-lg mb-4">
        Remember, this roadmap is a living document. As you progress through this course and gain more financial knowledge, you may need to revisit and adjust your goals.
      </p>
    </div>
  );
}