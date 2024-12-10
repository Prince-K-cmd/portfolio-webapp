import React from 'react';

interface CarouselHeaderProps {
  title: string;
}

export const CarouselHeader: React.FC<CarouselHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <span className="text-sm text-gray-400">{title}</span>
    </div>
  );
};