import React from 'react';
import BudgetActivity from '../components/BudgetActivity';
import KhanAcademySidebar from '../components/sidebar';

export default function BudgetActivityPage() {
  return (
    <div className="flex">
      <KhanAcademySidebar />
      <div className="flex-1 overflow-y-auto">
        <BudgetActivity />
      </div>
    </div>
  );
}