import React from 'react';
import SavingsGoalCalculator from '../components/SavingsGoalCalculator';
import KhanAcademySidebar from '../components/sidebar';

const SavingsGoalCalculatorPage = () => {
  return (
    <div className="flex">
      <KhanAcademySidebar />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
            Savings Goal Calculator Activity
          </h1>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-800 mb-2">
              Explore how different saving strategies can help you reach your financial goals.
            </p>
            <p className="text-base text-gray-600">
              Use this interactive calculator to see how various saving amounts and interest rates 
              affect the time it takes to reach your savings goals. This 20-minute activity will 
              help you understand the power of consistent saving and compound interest.
            </p>
          </div>
          
          <SavingsGoalCalculator />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Reflection Questions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>How does changing the monthly contribution affect the time to reach your goal?</li>
              <li>What impact does the interest rate have on your savings over time?</li>
              <li>How might this information influence your saving habits and financial planning?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsGoalCalculatorPage;