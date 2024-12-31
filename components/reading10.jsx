import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">What is a Budget?</h1>
      <p className="text-lg mb-4">
        A budget is a financial plan that helps you manage your money effectively. It's like a roadmap for your finances, showing you where your money comes from and where it goes. A good budget helps you live within your means and work towards your financial goals.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Key Components of a Budget:</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Income: Money you receive from various sources.</li>
        <li>Expenses: Money you spend on needs and wants.</li>
        <li>Savings: Money you set aside for future use or specific goals.</li>
      </ol>
      <h2 className="text-2xl font-semibold mb-2">Why is Budgeting Important?</h2>
      <p className="text-lg mb-4">Budgeting helps you:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Understand your spending habits</li>
        <li>Avoid overspending</li>
        <li>Prepare for unexpected expenses</li>
        <li>Make progress towards your financial goals</li>
        <li>Reduce financial stress</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Budgeting Myths:</h2>
      <div className="mb-4">
        <p className="font-semibold">Myth 1: Budgeting is too restrictive.</p>
        <p>Reality: A good budget gives you freedom by helping you spend consciously.</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Myth 2: I don't need a budget because I don't have much money.</p>
        <p>Reality: Budgeting is even more important when resources are limited.</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Myth 3: Budgeting is too time-consuming.</p>
        <p>Reality: Once set up, maintaining a budget takes minimal time and saves you money in the long run.</p>
      </div>
    </div>
  );
}