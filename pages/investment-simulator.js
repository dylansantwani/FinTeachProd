import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import KhanAcademySidebar from '../components/sidebar';
const SimpleLineChart = dynamic(() => import('../components/SimpleLineChart'), { ssr: false });

const industries = {
  Technology: [
    { name: 'TechGiant', data: [150, 160, 155, 170, 180, 175, 190] },
    { name: 'InnovateCorp', data: [80, 85, 90, 88, 92, 95, 100] },
    { name: 'FutureTech', data: [200, 210, 205, 215, 220, 225, 230] },
    { name: 'SmartSolutions', data: [50, 55, 53, 58, 60, 62, 65] },
  ],
  Healthcare: [
    { name: 'HealthFirst', data: [120, 125, 130, 128, 135, 140, 145] },
    { name: 'MediCure', data: [90, 95, 92, 98, 100, 105, 110] },
    { name: 'BioAdvance', data: [70, 75, 73, 78, 80, 82, 85] },
    { name: 'PharmaPlus', data: [110, 115, 118, 120, 125, 130, 135] },
  ],
  Finance: [
    { name: 'BigBank', data: [180, 185, 190, 188, 195, 200, 205] },
    { name: 'InvestCo', data: [100, 105, 108, 110, 115, 118, 120] },
    { name: 'WealthManage', data: [130, 135, 140, 138, 145, 150, 155] },
    { name: 'InsureSafe', data: [85, 90, 88, 92, 95, 98, 100] },
  ],
  Energy: [
    { name: 'GreenPower', data: [60, 65, 70, 75, 80, 85, 90] },
    { name: 'OilGiant', data: [140, 135, 130, 125, 120, 115, 110] },
    { name: 'SolarFuture', data: [40, 45, 50, 55, 60, 65, 70] },
    { name: 'WindWorks', data: [30, 35, 40, 45, 50, 55, 60] },
  ],
};

const InvestmentSimulator = () => {
  const [portfolio, setPortfolio] = useState({});
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [showResults, setShowResults] = useState(false);
  const [chartData, setChartData] = useState([]);

  const handleInvestment = (industry, stock, amount) => {
    setPortfolio(prev => ({
      ...prev,
      [industry]: {
        ...prev[industry],
        [stock]: Number(amount) || 0,
      },
    }));
  };

  const calculateReturns = () => {
    let totalReturn = 0;
    Object.entries(portfolio).forEach(([industry, stocks]) => {
      Object.entries(stocks).forEach(([stock, amount]) => {
        const stockData = industries[industry].find(s => s.name === stock);
        const initialPrice = stockData.data[0];
        const finalPrice = stockData.data[stockData.data.length - 1];
        const shares = amount / initialPrice;
        const returnAmount = shares * finalPrice - amount;
        totalReturn += returnAmount;
      });
    });
    return totalReturn;
  };

  const generateChartData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    return months.map((month, index) => {
      const dataPoint = { month };
      Object.entries(portfolio).forEach(([industry, stocks]) => {
        Object.entries(stocks).forEach(([stock, amount]) => {
          if (amount > 0) {
            const stockData = industries[industry].find(s => s.name === stock);
            dataPoint[stock] = (amount / stockData.data[0]) * stockData.data[index];
          }
        });
      });
      return dataPoint;
    });
  };

  useEffect(() => {
    if (showResults) {
      setChartData(generateChartData());
    }
  }, [showResults, portfolio]);

  return (
    <div className="flex">
      <KhanAcademySidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Investment Simulator (2022-2023)</h1>
          
          <div className="mb-6">
            <label className="block mb-2">Initial Investment:</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="border p-2 rounded"
            />
          </div>

          {Object.entries(industries).map(([industry, stocks]) => (
            <div key={industry} className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">{industry}</h2>
              {stocks.map((stock) => (
                <div key={stock.name} className="flex items-center mb-2">
                  <label className="w-1/4">{stock.name}:</label>
                  <input
                    type="number"
                    onChange={(e) => handleInvestment(industry, stock.name, e.target.value)}
                    className="border p-2 rounded w-1/4"
                  />
                </div>
              ))}
            </div>
          ))}

          <button
            onClick={() => setShowResults(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Simulate Investment
          </button>

          {showResults && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">Results</h2>
              <p>Total Return: ${calculateReturns().toFixed(2)}</p>
              <p>Final Portfolio Value: ${(initialInvestment + calculateReturns()).toFixed(2)}</p>
              <div className="mt-4" style={{ width: '100%', height: 400 }}>
                <SimpleLineChart data={chartData} />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Stock Performance Explanation</h3>
                {Object.entries(portfolio).map(([industry, stocks]) =>
                  Object.entries(stocks).map(([stock, amount]) => {
                    if (amount > 0) {
                      const stockData = industries[industry].find(s => s.name === stock);
                      const initialPrice = stockData.data[0];
                      const finalPrice = stockData.data[stockData.data.length - 1];
                      const performanceText = finalPrice > initialPrice ? 'increased' : 'decreased';
                      return (
                        <p key={stock} className="mb-2">
                          {stock} {performanceText} from ${initialPrice} to ${finalPrice}. 
                          {stock === 'SmartSolutions' && 'This smaller company faced challenges but managed to grow slightly.'}
                          {stock === 'SolarFuture' && 'This smaller company in the renewable energy sector saw significant growth due to increased demand for clean energy solutions.'}
                          {stock === 'OilGiant' && 'Traditional energy companies faced pressure from the shift towards renewable energy sources.'}
                          {stock === 'TechGiant' && 'Large tech companies continued to see growth despite market volatility.'}
                        </p>
                      );
                    }
                    return null;
                  })
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentSimulator;