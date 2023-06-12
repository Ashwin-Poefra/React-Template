import { PATH } from 'consts';
import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderSection: React.FC = () => {
  return (
    <div className="flex flex-col bg-indigo-700 p-4 w-full fixed top-0">
      <Link to={PATH.DASHBOARD} className="text-3xl font-bold text-white">
        React + Typescript Frontend Template
      </Link>
    </div>
  );
};
