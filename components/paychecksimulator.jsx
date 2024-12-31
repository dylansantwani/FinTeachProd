import React, { useState, useEffect } from 'react';

const PaycheckSimulator = () => {
  const [hourlyRate, setHourlyRate] = useState(15);
  const [hoursWorked, setHoursWorked] = useState(40);
  const [federalTaxRate, setFederalTaxRate] = useState(12);
  const [stateTaxRate, setStateTaxRate] = useState(5);
  const [otherDeductions, setOtherDeductions] = useState(0);
  const [grossPay, setGrossPay] = useState(0);
  const [netPay, setNetPay] = useState(0);

  useEffect(() => {
    calculatePay();
  }, [hourlyRate, hoursWorked, federalTaxRate, stateTaxRate, otherDeductions]);

  const calculatePay = () => {
    const gross = hourlyRate * hoursWorked;
    const federalTax = (gross * federalTaxRate) / 100;
    const stateTax = (gross * stateTaxRate) / 100;
    const net = gross - federalTax - stateTax - otherDeductions;

    setGrossPay(gross.toFixed(2));
    setNetPay(net.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Paycheck Simulator</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Hourly Rate ($)</label>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Hours Worked</label>
          <input
            type="number"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Federal Tax Rate (%)</label>
          <input
            type="number"
            value={federalTaxRate}
            onChange={(e) => setFederalTaxRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">State Tax Rate (%)</label>
          <input
            type="number"
            value={stateTaxRate}
            onChange={(e) => setStateTaxRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Other Deductions ($)</label>
          <input
            type="number"
            value={otherDeductions}
            onChange={(e) => setOtherDeductions(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Results</h3>
        <p><strong>Gross Pay:</strong> ${grossPay}</p>
        <p><strong>Net Pay:</strong> ${netPay}</p>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>This simulator provides a simplified calculation and may not reflect exact real-world scenarios. Actual paychecks may vary based on additional factors such as local taxes, benefits, and specific tax situations.</p>
      </div>
    </div>
  );
};

export default PaycheckSimulator;