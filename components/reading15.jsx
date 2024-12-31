import React from 'react';

export default function ReadingModule() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Saving Strategies for Teens</h1>
      <p className="text-lg mb-4">
        Developing good saving habits as a teen can set you up for financial success. Here are some strategies to consider:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Set Clear Savings Goals: Whether short-term (like buying a new phone) or long-term (like saving for college), having clear goals can motivate you to save.</li>
        <li>Pay Yourself First: As soon as you receive money, put a portion into savings before spending on anything else.</li>
        <li>Use the Right Savings Tools:
          <ul className="list-disc list-inside ml-6">
            <li>Savings Account: A basic account for your emergency fund and short-term goals.</li>
            <li>Certificate of Deposit (CD): Offers higher interest rates if you can leave the money untouched for a set period.</li>
            <li>High-Yield Savings Account: Online banks often offer higher interest rates than traditional banks.</li>
          </ul>
        </li>
        <li>Automate Your Savings: If you have a part-time job, see if you can automatically transfer a portion of each paycheck to your savings account.</li>
        <li>Find Creative Ways to Save:
          <ul className="list-disc list-inside ml-6">
            <li>Challenge yourself to no-spend days or weeks</li>
            <li>Save all your $1 bills or coins</li>
            <li>Put 'found' money (like birthday cash) directly into savings</li>
          </ul>
        </li>
        <li>Track Your Progress: Regularly check your savings balance to stay motivated.</li>
      </ol>
      <p className="text-lg mb-4">
        Remember, the amount you save matters less than the habit of saving consistently. Even small amounts add up over time!
      </p>
    </div>
  );
}