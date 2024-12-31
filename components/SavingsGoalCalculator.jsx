import React, { useState, useEffect } from 'react';

const SavingsGoalCalculator = () => {
  const [goal, setGoal] = useState(10000);
  const [initialSavings, setInitialSavings] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [interestRate, setInterestRate] = useState(5);
  const [timeToReachGoal, setTimeToReachGoal] = useState(0);

  useEffect(() => {
    calculateTimeToReachGoal();
  }, [goal, initialSavings, monthlyContribution, interestRate]);

  const calculateTimeToReachGoal = () => {
    const monthlyRate = interestRate / 100 / 12;
    let currentSavings = initialSavings;
    let months = 0;

    while (currentSavings < goal) {
      currentSavings += monthlyContribution;
      currentSavings *= (1 + monthlyRate);
      months++;

      if (months > 600) {  // 50 years cap
        setTimeToReachGoal(Infinity);
        return;
      }
    }

    setTimeToReachGoal(months);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Savings Goal Calculator</h2>
      
      <div className="mb-8 text-center">
        <p className="text-lg text-gray-700 mb-2">
          Explore how different saving strategies can help you reach your financial goals.
        </p>
        <p className="text-sm text-gray-500 italic">
          Adjust the values below and see how long it takes to reach your savings goal!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Savings Goal ($)</label>
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Initial Savings ($)</label>
            <input
              type="number"
              value={initialSavings}
              onChange={(e) => setInitialSavings(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Contribution ($)</label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Annual Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 rounded-md">
        <h3 className="text-lg font-semibold mb-2 text-green-800">Results</h3>
        <p className="text-green-700">
          <strong>Time to reach goal:</strong> {
            timeToReachGoal === Infinity 
              ? "More than 50 years" 
              : `${Math.floor(timeToReachGoal / 12)} years and ${timeToReachGoal % 12} months`
          }
        </p>
      </div>

      <div className="mt-8 text-sm text-gray-600 bg-gray-100 p-4 rounded-md">
        <p>This calculator provides a simplified projection and does not account for factors such as taxes, inflation, or changing interest rates. Always consult with a financial advisor for personalized advice.</p>
      </div>
    </div>
  );
};

export default SavingsGoalCalculator;