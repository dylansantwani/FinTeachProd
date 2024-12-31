import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Unit Project: My Savings Plan</h1>
      <p className="text-lg mb-4">
        Create a personal savings plan that aligns with your financial goals. Your plan should include:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Your savings goals (short-term and long-term)</li>
        <li>The amount you plan to save regularly (weekly or monthly)</li>
        <li>Where you'll keep your savings (type of account)</li>
        <li>Strategies you'll use to boost your savings</li>
        <li>How you'll track your progress</li>
        <li>Potential obstacles and how you'll overcome them</li>
      </ol>
      <p className="text-lg mb-4">
        Write out your savings plan in detail. Consider creating a visual representation, like a chart or graph, to help you track your progress over time.
      </p>
    </div>
  );
}