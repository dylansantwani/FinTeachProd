import React from 'react';

const BudgetActivity = () => {
  const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/14HUuxjSL2PWfu1DDdvmQgubrURVptQDrfChKiKLYNvo/copy";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Interactive Activity: Build Your Budget</h1>
      
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6" role="alert">
        <p className="font-bold">Activity Duration: 20 minutes</p>
        <p>Create your first budget using the provided Google Sheets template.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Instructions:</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Click the "Open Budget Template" button below to create a copy of a blank spreadsheet.</li>
          <li>Create sections for income, expenses (e.g., housing, food, transportation), and savings.</li>
          <li>Input your monthly income in the income section.</li>
          <li>Fill in your expenses in the various categories you've created.</li>
          <li>Set your savings goals in the savings section.</li>
          <li>Use formulas to calculate totals and the difference between income and expenses.</li>
          <li>Experiment with different allocations to see how they affect your ability to meet your financial goals.</li>
        </ol>
      </div>

      <div className="mb-6">
        <a 
          href={spreadsheetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Budget Template
        </a>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Tips for Budgeting:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Be realistic about your income and expenses.</li>
          <li>Don't forget to include irregular expenses (e.g., annual subscriptions, car maintenance).</li>
          <li>Try to allocate at least 20% of your income to savings and debt repayment.</li>
          <li>Review and adjust your budget regularly as your financial situation changes.</li>
        </ul>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
        <p className="font-bold">Remember:</p>
        <p>A budget is a powerful tool for achieving your financial goals, but it's only effective if you stick to it!</p>
      </div>
    </div>
  );
};

export default BudgetActivity;