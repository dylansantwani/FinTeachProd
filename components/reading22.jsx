import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Introduction to Investing</h1>
      <h2 className="text-2xl font-semibold mb-2">What is investing?</h2>
      <p className="text-lg mb-4">
        Investing means using your money to buy assets that have the potential to grow in value over time or provide income. These assets could be stocks, bonds, mutual funds, real estate, or even a business. While saving is crucial for short-term goals and emergencies, investing can help you build wealth over the long term and achieve bigger financial dreams.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Why should you consider investing?</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Beat Inflation: Over time, the cost of goods and services tends to rise (inflation). Investing can help your money grow faster than inflation, preserving its purchasing power.</li>
        <li>Compound Growth: Just like compound interest in savings accounts, investments can benefit from compounding returns over time. This means you earn returns not just on your original investment, but also on the returns you've already earned.</li>
        <li>Achieve Long-Term Goals: Investing can help you reach significant financial milestones like paying for college or buying a house.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">What are some key investment concepts to understand?</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Risk and Return: Generally, investments with higher potential returns come with higher risk. It's important to find a balance that you're comfortable with.</li>
        <li>Diversification: This means spreading your investments across different types of assets to manage risk. The idea is that if one investment performs poorly, others might perform well, helping to balance out your overall returns.</li>
        <li>Time Horizon: This refers to how long you plan to hold your investments before you need the money. Generally, the longer your time horizon, the more risk you might be able to take on.</li>
      </ul>
      <p className="text-lg mb-4">
        Remember, investing involves risk, including the possible loss of principal. It's important to understand these risks before you start investing.
      </p>
    </div>
  );
}