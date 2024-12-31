import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Types of Investments for Beginners</h1>
      <h2 className="text-2xl font-semibold mb-2">What are some common types of investments suitable for young investors?</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Savings Bonds: These are very low-risk investments backed by the U.S. government. They pay interest over time and are a good way to start learning about investing.</li>
        <li>Certificates of Deposit (CDs): CDs are savings certificates with a fixed interest rate and maturity date. They typically offer higher interest rates than savings accounts but require you to leave your money untouched for a set period.</li>
        <li>Mutual Funds: These are professionally managed investment funds that pool money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities. They can be a good way to get diversification even with a small amount of money.</li>
        <li>Exchange-Traded Funds (ETFs): Similar to mutual funds, ETFs hold a collection of securities but trade on exchanges like individual stocks. They often have lower fees than mutual funds.</li>
        <li>Individual Stocks: Buying stocks means purchasing a small piece of ownership in a company. This can be riskier than mutual funds or ETFs but can also offer higher potential returns.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">How should a beginner approach investing?</h2>
      <p className="text-lg mb-4">
        As a beginner, it's crucial to start with research and education. Understand the basics of how different investments work and the risks involved. Many young investors start with a combination of savings accounts, CDs, and perhaps a small amount in a broad-market index fund or ETF.
      </p>
      <p className="text-lg mb-4">
        It's also important to only invest money you won't need in the near future. Your emergency fund and short-term savings should be kept in more accessible, lower-risk accounts.
      </p>
      <p className="text-lg mb-4">
        Remember, everyone's financial situation is unique. It's often helpful to speak with a financial advisor or a knowledgeable adult before making investment decisions.
      </p>
    </div>
  );
}