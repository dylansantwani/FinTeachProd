import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Edit, FileText, DollarSign, PiggyBank, Gamepad } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const units = [
  {
    title: "Unit 1: Financial Planning",
    modules: [
      { type: "reading", title: "The Importance of Financial Goal Setting", link: "/reading1" },
      { type: "reading", title: "Types of Financial Goals", link: "/reading2" },
      { type: "reading", title: "Crafting Effective Financial Goals", link: "/reading3" },
      { type: "reading", title: "Overcoming Obstacles to Financial Goals", link: "/reading4" },
      { type: "activity", title: "Goal Obstacle Course", link: "/game" },
      { type: "activity", title: "Unit Project: Creating My Financial Goals Roadmap", link: "/reading5" },
      { type: "unit-test", title: "Unit Test", link: "/unittest1" },
    ]
  },
  {
    title: "Unit 2: My First Paycheck - Understanding Income",
    modules: [
      { type: "reading", title: "What is Income?", link: "/reading6" },
      { type: "reading", title: "Sources of Income for High School Students", link: "/reading7" },
      { type: "reading", title: "Managing Your First Paycheck", link: "/reading8" },
      { type: "activity", title: "Paycheck Simulator", link: "/paycheck" },
      { type: "activity", title: "Unit Project: Creating My Income Plan", link: "/reading9" },
      { type: "unit-test", title: "Unit Test: Understanding Income", link: "/unittest2" },
    ]
  },
  {
    title: "Unit 3: Budgeting for My Life",
    modules: [
      { type: "reading", title: "What is a Budget?", link: "/reading10" },
      { type: "reading", title: "Creating Your First Budget", link: "/reading11" },
      { type: "reading", title: "Sticking to Your Budget", link: "/reading12" },
      { type: "activity", title: "Build Your Budget", link: "/budget-activity" },
      { type: "activity", title: "Unit Project: 30-Day Budget Challenge", link: "/reading13" },
      { type: "unit-test", title: "Unit Test: Budgeting for My Life", link: "/unittest3" },
    ]
  },
  {
    title: "Unit 4: Saving for My Future",
    modules: [
      { type: "reading", title: "The Power of Saving", link: "/reading14" },
      { type: "reading", title: "Saving Strategies for Teens", link: "/reading15" },
      { type: "reading", title: "Balancing Saving and Spending", link: "/reading16" },
      { type: "activity", title: "Savings Goal Calculator", link: "/saving" },
      { type: "activity", title: "Unit Project: My Savings Plan", link: "/reading17" },
      { type: "unit-test", title: "Unit Test: Saving for My Future", link: "/unittest4" },
    ]
  },
  {
    title: "Unit 5: Smart Spending for My Lifestyle",
    modules: [
      { type: "reading", title: "Understanding Needs vs. Wants", link: "/reading18" },
      { type: "reading", title: "Value-Based Spending", link: "/reading19" },
      { type: "reading", title: "Strategies for Smart Spending", link: "/reading20" },
      { type: "activity", title: "Smart Shopper Challenge", link: "/smartshopper" },
      { type: "activity", title: "Unit Project: Smart Spending Challenge", link: "/reading21" },
      { type: "unit-test", title: "Unit Test: Smart Spending for My Lifestyle", link: "/unittest5" },
    ]
  },
  {
    title: "Unit 6: Investing in My Dreams",
    modules: [
      { type: "reading", title: "Introduction to Investing", link: "/reading22" },
      { type: "reading", title: "Types of Investments for Beginners", link: "/reading23" },
      { type: "activity", title: "Investment Simulator", link: "/investment-simulator" },
      { type: "activity", title: "Unit Project: Creating My First Investment Plan", link: "/reading24" },
      { type: "unit-test", title: "Unit Test: Investing in My Dreams", link: "/unittest6" },
    ]
  },
  {
    title: "Course Wrap-Up",
    modules: [
      { type: "reading", title: "My Comprehensive Financial Plan", link: "/reading25" },
    ]
  },
];

const KhanAcademySidebar = () => {
  const router = useRouter();
  const [currentUnitIndex, setCurrentUnitIndex] = useState(0);
  const totalItems = units.length;

  useEffect(() => {
    const currentPath = router.pathname;
    let foundIndex = -1;

    for (let i = 0; i < units.length; i++) {
      const moduleIndex = units[i].modules.findIndex(module => module.link === currentPath);
      if (moduleIndex !== -1) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex !== -1) {
      setCurrentUnitIndex(foundIndex);
    }
  }, [router.pathname]);

  const goToPreviousUnit = () => {
    if (currentUnitIndex > 0) {
      setCurrentUnitIndex(currentUnitIndex - 1);
    }
  };

  const goToNextUnit = () => {
    if (currentUnitIndex < totalItems - 1) {
      setCurrentUnitIndex(currentUnitIndex + 1);
    }
  };

  const currentItem = units[currentUnitIndex];

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold flex items-center">
          <span className="bg-blue-600 text-white p-2 rounded mr-2">FL</span>
          Financial Literacy
        </h1>
      </div>
      
      <div className="p-4 border-b border-gray-200">
        <p className="text-sm text-gray-500">COURSE: FINANCIAL LITERACY</p>
        <div className="flex justify-between items-center mt-2">
          <ChevronLeft
            className={`cursor-pointer ${currentUnitIndex === 0 ? 'text-gray-300' : 'text-gray-600'}`}
            onClick={goToPreviousUnit}
          />
          <h2 className="text-lg font-semibold">{currentItem.title}</h2>
          <ChevronRight
            className={`cursor-pointer ${currentUnitIndex === totalItems - 1 ? 'text-gray-300' : 'text-gray-600'}`}
            onClick={goToNextUnit}
          />
        </div>
      </div>
      
      <div className="p-4">
        <ul className="space-y-3">
          {currentItem.modules.map((module, index) => (
            <LessonItem
              key={index}
              icon={getModuleIcon(module.type)}
              title={module.title}
              link={module.link}
              isActive={router.pathname === module.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const LessonItem = ({ icon, title, link, isActive }) => {
  return (
    <li className={`flex items-center p-2 rounded ${isActive ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
      <Link href={link} className="flex items-center w-full">
        <span className={`mr-3 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>{icon}</span>
        <span className={`flex-grow ${isActive ? 'font-semibold text-blue-600' : ''}`}>{title}</span>
      </Link>
    </li>
  );
};

const getModuleIcon = (type) => {
  switch (type) {
    case "reading":
      return <BookOpen size={18} />;
    case "quiz":
    case "unit-test":
      return <Edit size={18} />;
    case "activity":
      return <DollarSign size={18} />;
    case "savings":
      return <PiggyBank size={18} />;
    case "game":
      return <Gamepad size={18} />;
    default:
      return <FileText size={18} />;
  }
};

export default KhanAcademySidebar;