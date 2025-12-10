import React from 'react';
import { Download } from 'lucide-react';

const Fees: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary py-12 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold animate-fade-in-up">Fee Structure</h1>
      </div>

      <div className="container mx-auto px-4 py-12 perspective">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm hover-3d-card animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            
            <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h2 className="text-2xl font-bold text-primary">Fee & Notices 2025-2026</h2>
                <button className="flex items-center text-sm font-bold text-secondary hover:underline">
                    <Download className="w-4 h-4 mr-1" /> Download PDF
                </button>
            </div>

            <div className="space-y-8">
                {/* Admission Fee */}
                <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-primary mb-2">Admission Fee</h3>
                    <p className="text-gray-800 text-xl font-bold">₹1,000/-</p>
                    <p className="text-sm text-gray-600">One time payment at the time of admission only.</p>
                </div>

                {/* Schedule */}
                <div>
                    <h3 className="font-bold text-lg text-primary mb-4">Payment Schedule</h3>
                    <p className="mb-4 text-gray-700">For payment of fees, the school year is divided into six terms. Fees must be deposited between the 1st to 10th of the designated months.</p>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3">Term</th>
                                    <th className="px-6 py-3">Month to Deposit</th>
                                    <th className="px-6 py-3">Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b"><td className="px-6 py-4 font-medium">Term 1</td><td className="px-6 py-4">April</td><td className="px-6 py-4">10th April</td></tr>
                                <tr className="bg-white border-b"><td className="px-6 py-4 font-medium">Term 2</td><td className="px-6 py-4">June</td><td className="px-6 py-4">10th June</td></tr>
                                <tr className="bg-white border-b"><td className="px-6 py-4 font-medium">Term 3</td><td className="px-6 py-4">August</td><td className="px-6 py-4">10th August</td></tr>
                                <tr className="bg-white border-b"><td className="px-6 py-4 font-medium">Term 4</td><td className="px-6 py-4">October</td><td className="px-6 py-4">10th October</td></tr>
                                <tr className="bg-white border-b"><td className="px-6 py-4 font-medium">Term 5</td><td className="px-6 py-4">December</td><td className="px-6 py-4">10th December</td></tr>
                                <tr className="bg-white border-b"><td className="px-6 py-4 font-medium">Term 6</td><td className="px-6 py-4">February</td><td className="px-6 py-4">10th February</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Rules */}
                <div>
                    <h3 className="font-bold text-lg text-primary mb-4">Important Rules</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>All fees are to be deposited in <strong>Bank of Baroda</strong>.</li>
                        <li><strong>Late Fine (School Fee):</strong> ₹10/- per day from the 11th of the month.</li>
                        <li><strong>Late Fine (Bus Fee):</strong> ₹5/- per day.</li>
                        <li>
                            <span className="text-secondary font-bold">Discount:</span> Fees & bus fees can be paid for the full session by cheque or cash with a <strong>5% discount</strong> for full-session depositors.
                        </li>
                    </ul>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;