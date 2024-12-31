import React from 'react';

export const Progress = ({ value }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${value}%` }}></div>
    </div>
  );
};
