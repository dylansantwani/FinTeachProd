import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Unit Project: Smart Spending Challenge</h1>
      <h2 className="text-2xl font-semibold mb-2">What is the Smart Spending Challenge?</h2>
      <p className="text-lg mb-4">
        The Smart Spending Challenge is a 30-day project designed to help you improve your spending habits based on what you've learned in this unit.
      </p>
      <h2 className="text-2xl font-semibold mb-2">How should you structure your challenge?</h2>
      <ol className="list-decimal list-inside text-lg mb-4">
        <li>Set a specific spending goal, such as reducing non-essential spending by 20%.</li>
        <li>Choose strategies you've learned that you want to implement. For example:
          <ul className="list-disc list-inside ml-6">
            <li>Using the 24-hour rule for non-essential purchases</li>
            <li>Practicing comparison shopping</li>
            <li>Applying the "cost per use" concept</li>
          </ul>
        </li>
        <li>Decide how you'll track your spending during the challenge - this could be through a budgeting app or a simple notebook.</li>
        <li>Think about potential obstacles you might face and how you'll overcome them. For example:
          <ul className="list-disc list-inside ml-6">
            <li>Peer pressure to spend: Plan how you'll handle social situations</li>
            <li>Sales and discounts: Decide how you'll approach these temptations</li>
            <li>Unexpected expenses: Have a plan for dealing with these</li>
          </ul>
        </li>
        <li>Decide on a reward for successfully completing the challenge. Make sure this reward aligns with your values and doesn't undermine the progress you've made.</li>
      </ol>
      <h2 className="text-2xl font-semibold mb-2">How can you increase your chances of success?</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Write out your challenge plan in detail.</li>
        <li>Consider finding an accountability partner, like a friend or family member, to help keep you on track.</li>
        <li>Regularly review your progress and be prepared to adjust your strategies if needed.</li>
        <li>Keep a journal of your experiences, noting what's working well and what's challenging.</li>
      </ul>
      <p className="text-lg mb-4">
        Remember, the goal of this challenge is not just to save money for a month, but to develop lasting habits that will help you make smarter spending decisions in the long term. Even if you don't perfectly stick to your plan, you'll learn valuable lessons about your spending habits and how to manage your money more effectively.
      </p>
      <h2 className="text-2xl font-semibold mb-2">After the Challenge</h2>
      <p className="text-lg mb-4">
        Once you've completed your 30-day challenge, take some time to reflect on your experience. What did you learn? What habits do you want to continue? How has your perspective on spending changed? Use these insights to continue refining your approach to smart spending beyond the challenge.
      </p>
    </div>
  );
}