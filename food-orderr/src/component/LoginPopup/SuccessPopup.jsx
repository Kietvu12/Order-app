import React from 'react';
import { X } from 'lucide-react';

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-green-600">Success!</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;

