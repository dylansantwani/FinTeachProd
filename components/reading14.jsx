import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">The Power of Saving</h1>
      <p className="text-lg mb-4">
        Saving money is a crucial habit that can significantly impact your financial future. It's not just about putting money aside; it's about creating opportunities and security for yourself.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Why is Saving Important?</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Emergency Preparedness: Savings can help you handle unexpected expenses without stress.</li>
        <li>Goal Achievement: Whether it's a new gadget or college tuition, savings help you reach your goals.</li>
        <li>Financial Independence: Saving habits now can lead to greater financial freedom in the future.</li>
        <li>Compound Interest: When you save money in interest-bearing accounts, you earn interest on your interest over time.</li>
      </ol>
      <h2 className="text-2xl font-semibold mb-2">The Magic of Compound Interest</h2>
      <p className="text-lg mb-4">
        Compound interest is like a snowball effect for your money. Here's a simple example:
      </p>
      <p className="text-lg mb-4">
        If you save $1000 at age 15 in an account with 5% annual interest, by age 65 it would grow to about $7,040 without you adding another cent. That's the power of compound interest over time.
      </p>
    </div>
  );
}