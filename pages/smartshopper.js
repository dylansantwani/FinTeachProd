import React from 'react';
import SmartShopperChallenge from '../components/SmartShopperChallenge';
import KhanAcademySidebar from '../components/sidebar';

const SmartShopperChallengePage = () => {
  return (
    <div className="flex">
      <KhanAcademySidebar />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-purple-600 mb-4">
            Smart Shopper Challenge
          </h1>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-800 mb-2">
              Practice applying the concepts of needs vs. wants and value-based spending to real-life scenarios.
            </p>
            <p className="text-base text-gray-600">
              You'll be presented with various purchase decisions and asked to identify whether the purchase is a need or a want, 
              determine if it aligns with given values and goals, and suggest alternatives or ways to make the purchase more value-aligned. 
              This 20-minute activity will help you develop critical thinking skills for making smart spending decisions in your daily life.
            </p>
          </div>
          
          <SmartShopperChallenge />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Reflection Questions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>How did this challenge change your perspective on everyday purchase decisions?</li>
              <li>What strategies can you implement to better align your spending with your values and goals?</li>
              <li>How might practicing "smart shopping" impact your long-term financial health?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartShopperChallengePage;