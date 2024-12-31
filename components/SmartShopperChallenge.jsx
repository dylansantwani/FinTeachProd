import React, { useState } from 'react';

const scenarios = [
  {
    item: "New smartphone",
    price: "$800",
    context: "Your current phone is 3 years old but still works fine.",
    values: ["Technology", "Communication"],
  },
  {
    item: "Gym membership",
    price: "$50/month",
    context: "You want to get in shape, but there's a free park nearby.",
    values: ["Health", "Fitness"],
  },
  {
    item: "Designer shoes",
    price: "$300",
    context: "You have functional shoes, but these are the latest trend.",
    values: ["Fashion", "Style"],
  },
  {
    item: "Cooking class",
    price: "$200",
    context: "You want to improve your cooking skills and eat healthier.",
    values: ["Skill development", "Health"],
  },
  {
    item: "4K TV",
    price: "$1000",
    context: "Your current TV works, but this one has better picture quality.",
    values: ["Entertainment", "Technology"],
  }
];

const SmartShopperChallenge = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  const handleResponse = (field, value) => {
    setUserResponses({
      ...userResponses,
      [currentScenario]: { ...userResponses[currentScenario], [field]: value }
    });
  };

  const submitResponse = () => {
    setShowFeedback(true);
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setShowFeedback(false);
    }
  };

  const scenario = scenarios[currentScenario];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">Smart Shopper Challenge</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Scenario {currentScenario + 1} of {scenarios.length}</h3>
        <p className="text-lg mb-2"><strong>Item:</strong> {scenario.item}</p>
        <p className="text-lg mb-2"><strong>Price:</strong> {scenario.price}</p>
        <p className="text-lg mb-2"><strong>Context:</strong> {scenario.context}</p>
        <p className="text-lg mb-4"><strong>Related Values:</strong> {scenario.values.join(", ")}</p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Is this a need or a want?</label>
          <select 
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
            onChange={(e) => handleResponse('needWant', e.target.value)}
            value={userResponses[currentScenario]?.needWant || ''}
          >
            <option value="">Select...</option>
            <option value="need">Need</option>
            <option value="want">Want</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Does this align with the given values and goals?</label>
          <select 
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
            onChange={(e) => handleResponse('alignment', e.target.value)}
            value={userResponses[currentScenario]?.alignment || ''}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="partially">Partially</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Suggest an alternative or way to make this purchase more value-aligned:</label>
          <textarea 
            className="mt-1 block w-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
            rows="3"
            onChange={(e) => handleResponse('suggestion', e.target.value)}
            value={userResponses[currentScenario]?.suggestion || ''}
          ></textarea>
        </div>
      </div>

      {!showFeedback ? (
        <button 
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
          onClick={submitResponse}
        >
          Submit Response
        </button>
      ) : (
        <div className="mt-6 p-4 bg-green-50 rounded-md">
          <h4 className="text-lg font-semibold mb-2 text-green-800">Great job! Here's some feedback:</h4>
          <p className="mb-2">There's no strictly right or wrong answer, but here are some points to consider:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Needs are essential for survival or basic functioning, while wants are desires that enhance life but aren't crucial.</li>
            <li>Value alignment depends on personal priorities. Consider both short-term satisfaction and long-term goals.</li>
            <li>Alternatives could include finding a cheaper option, waiting for a sale, or focusing on more aligned purchases.</li>
          </ul>
          <button 
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            onClick={nextScenario}
          >
            {currentScenario < scenarios.length - 1 ? "Next Scenario" : "Finish Challenge"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SmartShopperChallenge;