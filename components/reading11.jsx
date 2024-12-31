import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Creating Your First Budget</h1>
      <h2 className="text-2xl font-semibold mb-2">Step 1: Determine Your Income</h2>
      <p className="text-lg mb-4">
        List all sources of income and calculate your total monthly income. For irregular income, use an average.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Step 2: List Your Expenses</h2>
      <p className="text-lg mb-4">
        Start by tracking your spending for a month. Categorize your expenses into:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Fixed expenses (same amount each month, like a phone bill)</li>
        <li>Variable expenses (amount changes, like entertainment)</li>
        <li>Periodic expenses (occur occasionally, like birthday gifts)</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Step 3: Set Savings Goals</h2>
      <p className="text-lg mb-4">
        Decide how much you want to save each month for your various financial goals.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Step 4: Balance Your Budget</h2>
      <p className="text-lg mb-4">
        Subtract your expenses and savings from your income. If the result is negative, you'll need to either increase your income or reduce your expenses.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Step 5: Choose a Budgeting Method</h2>
      <p className="text-lg mb-4">There are several popular budgeting methods:</p>
      <ol className="list-decimal list-inside mb-4">
        <li>Zero-Based Budgeting: Every dollar has a job. Income minus expenses and savings equals zero.</li>
        <li>50/30/20 Rule: Allocate 50% to needs, 30% to wants, and 20% to savings.</li>
        <li>Envelope System: Use physical envelopes or digital categories for different expense types.</li>
      </ol>
      <p className="text-lg mb-4">
        Choose the method that feels most manageable and aligns with your goals.
      </p>
    </div>
  );
}