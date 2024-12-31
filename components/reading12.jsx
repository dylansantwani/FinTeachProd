import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Sticking to Your Budget</h1>
      <p className="text-lg mb-4">
        Creating a budget is just the first step. The real challenge - and benefit - comes from sticking to it consistently.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Tips for Staying on Budget:</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Review Regularly: Check your budget weekly to stay on track.</li>
        <li>Use Technology: Budgeting apps can help you track expenses easily.</li>
        <li>Avoid Impulse Purchases: Wait 24 hours before making unplanned purchases.</li>
        <li>Find Free or Low-Cost Activities: Look for ways to have fun without spending much.</li>
        <li>Learn to Distinguish Needs from Wants: Be honest about what's truly necessary.</li>
        <li>Plan for Irregular Expenses: Set aside money each month for periodic costs.</li>
        <li>Be Flexible: Adjust your budget as your circumstances change.</li>
        <li>Celebrate Small Wins: Acknowledge when you meet your budgeting goals.</li>
      </ol>
      <h2 className="text-2xl font-semibold mb-2">Dealing with Budget Busters:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Peer Pressure: Communicate your financial goals to friends and suggest affordable activities.</li>
        <li>Unexpected Expenses: Build an emergency fund to handle surprises.</li>
        <li>Overspending in One Category: Look for ways to cut back in other areas to compensate.</li>
      </ul>
      <p className="text-lg mb-4">
        Remember, budgeting is a skill that improves with practice. Don't be discouraged if you don't stick to your budget perfectly at first. The goal is progress, not perfection.
      </p>
    </div>
  );
}