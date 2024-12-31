import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Types of Financial Goals</h1>
      <p className="text-lg text-center mb-6">
        Learn about different types of financial goals and how they work together to create a comprehensive financial plan.
      </p>
      <h2 className="text-3xl font-semibold mb-4">What are the different types of financial goals?</h2>
      <p className="text-lg mb-4">
        Financial goals can be categorized based on the time frame in which you aim to achieve them:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Short-term goals (under 1 year)</li>
        <li>Medium-term goals (1-5 years)</li>
        <li>Long-term goals (over 5 years)</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Short-term financial goals</h2>
      <p className="text-lg mb-4">
        These are objectives you plan to achieve within a year. Examples include:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Saving for a school trip</li>
        <li>Building a small emergency fund</li>
        <li>Purchasing new technology for school</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Medium-term financial goals</h2>
      <p className="text-lg mb-4">
        These goals typically take 1-5 years to achieve. They might include:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Saving for a car</li>
        <li>Funding a gap year</li>
        <li>Saving for the first year of college</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Long-term financial goals</h2>
      <p className="text-lg mb-4">
        These are significant objectives that often take more than 5 years to achieve. Examples are:
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Funding a four-year college education</li>
        <li>Saving for a home down payment</li>
        <li>Starting retirement savings</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-4">Why is it important to have a mix of goals?</h2>
      <p className="text-lg mb-4">
        Having a balance of short, medium, and long-term goals allows you to:
      </p>
      <ol className="list-decimal list-inside text-lg mb-4">
        <li>Experience quick wins with short-term goals, keeping you motivated</li>
        <li>Learn valuable lessons in planning and delayed gratification with medium-term goals</li>
        <li>Develop long-term financial planning skills with long-term goals</li>
      </ol>
      <h2 className="text-3xl font-semibold mb-4">How do these goals work together?</h2>
      <p className="text-lg mb-4">
        Your mix of goals creates a comprehensive financial plan. Short-term goals provide immediate focus, medium-term goals bridge the gap to your bigger aspirations, and long-term goals keep you thinking about your financial future. This balanced approach helps you manage your money effectively at different stages of your life.
      </p>
    </div>
  );
}