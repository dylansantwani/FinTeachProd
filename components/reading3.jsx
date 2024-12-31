import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Crafting Effective Financial Goals</h1>
      <p className="text-lg text-center mb-6">
        Learn how to create SMART financial goals that drive your success.
      </p>
      <h2 className="text-3xl font-semibold mb-4">What makes a financial goal effective?</h2>
      <p className="text-lg mb-4">
        An effective financial goal is:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Specific: Clearly defines what you want to achieve</li>
        <li>Measurable: Allows you to track your progress</li>
        <li>Achievable: Realistic given your current circumstances</li>
        <li>Relevant: Aligns with your values and long-term objectives</li>
        <li>Time-bound: Has a specific deadline</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">How do you make a goal specific?</h2>
      <p className="text-lg mb-4">
        Instead of a vague goal like "save money for college," make it specific: "save for first-year college tuition and books." This clarity helps you focus your efforts.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Why is measurability important?</h2>
      <p className="text-lg mb-4">
        Measurable goals allow you to track your progress. For example, "save $5,000 for college expenses" is more measurable than "save for college." You can easily check how close you are to your $5,000 target.
      </p>
      <h2 className="text-3xl font-semibold mb-4">What makes a goal achievable?</h2>
      <p className="text-lg mb-4">
        An achievable goal considers your current circumstances. If you earn $200 a month from a part-time job, saving $1,000 a month isn't realistic. Adjust your goal to match your income and expenses.
      </p>
      <h2 className="text-3xl font-semibold mb-4">How do you ensure a goal is relevant?</h2>
      <p className="text-lg mb-4">
        A relevant goal aligns with your values and long-term objectives. If attending college is important to you, saving for college expenses is a relevant goal.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Why should goals be time-bound?</h2>
      <p className="text-lg mb-4">
        Time-bound goals create urgency and help with planning. "Save $5,000 for college by August 1, 2025" gives you a clear deadline to work towards.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Example of an effective financial goal:</h2>
      <p className="text-lg mb-4">
        "Save $5,000 for first-year college expenses by August 1, 2025, by depositing $150 monthly from my part-time job earnings into a dedicated savings account."
      </p>
      <p className="text-lg mb-4">
        This goal is specific ($5,000 for first-year college expenses), measurable ($5,000 target), achievable ($150 monthly from part-time job), relevant (for college expenses), and time-bound (by August 1, 2025).
      </p>
    </div>
  );
}