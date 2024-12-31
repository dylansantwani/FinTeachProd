import React from 'react';
import PaycheckSimulator from '../components/paychecksimulator';
import KhanAcademySidebar from '../components/sidebar';

const PaycheckSimulatorPage = () => {
  return (
    <div className="flex">
      <KhanAcademySidebar />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Paycheck Simulator Activity
          </h1>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-800 mb-2">
              Use this interactive simulator to see how different factors affect your take-home pay.
            </p>
            <p className="text-base text-gray-600">
              Experiment with various hourly rates, hours worked, and deductions to understand 
              the relationship between gross pay and net pay. This 20-minute activity will help 
              you better grasp how your paycheck is calculated.
            </p>
          </div>
          
          <PaycheckSimulator />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Reflection Questions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>How does changing the hourly rate affect the net pay compared to changing the hours worked?</li>
              <li>What impact do the different types of deductions have on your take-home pay?</li>
              <li>How might understanding these factors influence your financial decisions?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaycheckSimulatorPage;