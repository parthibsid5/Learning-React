import React from 'react';

export default function Card({
  imageSrc,
  title,
  features = [],
  inclusion = [],
  totalPrice
}){
  return (
    <div className="relative max-w-md w-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800 leading-snug">
            {title}
          </h3>
          <span className="text-xs px-2 py-1 bg-gray-100 border border-gray-300 rounded text-blue-900 font-semibold">
            3N/4D
          </span>
        </div>

        <hr className="my-3" />

        {/* Features */}
        <div className="grid grid-cols-2 gap-x-4 text-sm text-gray-700">
          {features.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-1">
              {column.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          ))}
        </div>

        <hr className="my-3" />

        {/* Inclusions + Price */}
        <div className="grid grid-cols-2 gap-x-4 text-sm text-gray-700">
          <ul className="pl-5 space-y-1 text-teal-700">
            {inclusion.map((incl, index) => (
              <li key={index}>✔ {incl}</li>
            ))}
          </ul>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">
              ₹{totalPrice.toLocaleString('en-IN')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

