import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Unit Project: 30-Day Budget Challenge</h1>
      <p className="text-lg mb-4">
        Design a personal 30-day budget challenge to help reinforce good budgeting habits. Your challenge should include the following components:
      </p>
      <h2 className="text-2xl font-semibold mb-2">1. Specific budgeting goals for the month</h2>
      <p className="text-lg mb-4">
        Set clear, measurable goals for your budget. For example:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Reduce dining out expenses by 50%</li>
        <li>Save $100 towards your emergency fund</li>
        <li>Cut entertainment spending by 25%</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">2. Daily or weekly check-ins to track progress</h2>
      <p className="text-lg mb-4">
        Decide how often you'll review your budget. This could involve:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Daily expense tracking</li>
        <li>Weekly budget reviews</li>
        <li>Using a budgeting app for real-time updates</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">3. Strategies for handling common budget busters</h2>
      <p className="text-lg mb-4">
        Identify potential challenges and plan how to overcome them. For example:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Social events: Suggest low-cost alternatives to friends</li>
        <li>Impulse purchases: Implement a 24-hour rule before buying non-essentials</li>
        <li>Unexpected expenses: Use your emergency fund if necessary</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">4. A reward for successfully completing the challenge</h2>
      <p className="text-lg mb-4">
        Choose a meaningful reward that doesn't break your budget. This could be:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>A small treat or experience you've been wanting</li>
        <li>Extra money towards a savings goal</li>
        <li>A day off from your usual responsibilities</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">Next Steps:</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Write out your challenge plan in detail</li>
        <li>Commit to following it for the next month</li>
        <li>Consider finding an accountability partner (like a friend or family member) to help keep you on track</li>
      </ol>
      
      <p className="text-lg mb-4">
        Remember, the goal of this challenge is to reinforce good budgeting habits and make progress towards your financial goals. Even if you don't stick to your budget perfectly, you'll learn valuable lessons about your spending habits and how to manage your money more effectively.
      </p>
    </div>
  );
}