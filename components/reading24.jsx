import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Unit Project: Creating My First Investment Plan</h1>
      <p className="text-lg mb-4">
        An investment plan is a strategy for how you'll invest your money to reach your financial goals. It takes into account your financial situation, goals, risk tolerance, and time horizon.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Steps to Create Your First Investment Plan:</h2>
      <ol className="list-decimal list-inside text-lg mb-4">
        <li>Define Your Goals:
          <ul className="list-disc list-inside ml-6">
            <li>What are you investing for? (e.g., college, a car, retirement)</li>
            <li>Be specific about what you want to achieve and when</li>
          </ul>
        </li>
        <li>Assess Your Risk Tolerance:
          <ul className="list-disc list-inside ml-6">
            <li>How comfortable are you with the possibility of losing money in the short term for the potential of higher returns in the long term?</li>
            <li>Consider taking a risk tolerance questionnaire online</li>
          </ul>
        </li>
        <li>Determine Your Time Horizon:
          <ul className="list-disc list-inside ml-6">
            <li>When will you need the money you're investing?</li>
            <li>Longer time horizons generally allow for more risk-taking</li>
          </ul>
        </li>
        <li>Choose Your Investments:
          <ul className="list-disc list-inside ml-6">
            <li>Based on your goals, risk tolerance, and time horizon, decide what types of investments you want to include in your portfolio</li>
            <li>Consider a mix of stocks, bonds, and other assets</li>
          </ul>
        </li>
        <li>Plan Your Asset Allocation:
          <ul className="list-disc list-inside ml-6">
            <li>Decide what percentage of your portfolio you want in each type of investment</li>
            <li>A common starting point is subtracting your age from 100 to get the percentage for stocks, with the rest in bonds</li>
          </ul>
        </li>
        <li>Set Up a Regular Investment Schedule:
          <ul className="list-disc list-inside ml-6">
            <li>Decide how much you can invest regularly and how often</li>
            <li>Consider using dollar-cost averaging by investing a fixed amount at regular intervals</li>
          </ul>
        </li>
        <li>Plan for Regular Review and Rebalancing:
          <ul className="list-disc list-inside ml-6">
            <li>Decide how often you'll review your investments and adjust them if needed</li>
            <li>Annually is often a good starting point</li>
          </ul>
        </li>
      </ol>
      <h2 className="text-2xl font-semibold mb-2">Your Task:</h2>
      <p className="text-lg mb-4">
        Write out your investment plan, explaining your decisions for each step. Include:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Your specific investment goals</li>
        <li>Your risk tolerance and why you've assessed it that way</li>
        <li>Your time horizon for each goal</li>
        <li>The types of investments you plan to use</li>
        <li>Your planned asset allocation</li>
        <li>Your investment schedule</li>
        <li>How and when you plan to review and rebalance your investments</li>
      </ul>
      <p className="text-lg mb-4">
        Remember, this is a learning exercise. In real life, it's wise to consult with a financial advisor before making significant investment decisions. As you continue to learn and your financial situation changes, you may need to adjust your investment plan.
      </p>
    </div>
  );
}