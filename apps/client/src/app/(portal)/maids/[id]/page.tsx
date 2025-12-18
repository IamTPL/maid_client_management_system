'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, User, Calendar, Briefcase, Star } from 'lucide-react';

// --- Mock Data ---

const MOCK_MAID_DETAIL = {
  id: '1',
  name: 'Maria Dela Cruz',
  nationality: 'Philippines',
  dob: '1992-05-15',
  age: 32,
  religion: 'Catholic',
  maritalStatus: 'Single',
  height: '160cm',
  weight: '55kg',
  education: 'High School',
  skills: ['Infant Care', 'Cooking', 'General Housework'],
  experience: '4 Years in Singapore',
  bio: 'Maria is a hardworking and experienced helper. She has 4 years of experience in Singapore taking care of children and doing general housework. She loves cooking and is eager to learn new recipes.',
  history: [
    {
      employer: 'Mr. Tan',
      period: '2019 - 2023',
      duties: 'Childcare (3yo & 5yo), Cooking, Housekeeping',
      reason: 'Finished Contract',
    },
  ],
};

export default function MaidDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = use(params);
  const maid = MOCK_MAID_DETAIL;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-white p-2 shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
          <Link href="/maids">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{maid.name}</h1>
          <p className="text-sm text-gray-500">
            {maid.nationality} • {maid.age} Years Old
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column: Bio-data Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm overflow-hidden text-center">
            <div className="mx-auto h-32 w-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-4xl text-gray-400">
              <User />
            </div>
            <h2 className="text-xl font-bold text-gray-900">{maid.name}</h2>
            <p className="text-sm text-blue-600 font-medium mb-6">Available</p>

            <div className="border-t border-gray-100 pt-4 text-left space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Nationality</span>
                <span className="text-gray-900 font-medium">{maid.nationality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Age</span>
                <span className="text-gray-900 font-medium">{maid.age}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Religion</span>
                <span className="text-gray-900 font-medium">{maid.religion}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Marital Status</span>
                <span className="text-gray-900 font-medium">{maid.maritalStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Education</span>
                <span className="text-gray-900 font-medium">{maid.education}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {maid.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Details & History */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">About {maid.name}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{maid.bio}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Employment History</h2>
            <div className="overflow-hidden rounded-lg border border-gray-100">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-6 py-3 font-medium">Employer</th>
                    <th className="px-6 py-3 font-medium">Period</th>
                    <th className="px-6 py-3 font-medium">Duties</th>
                    <th className="px-6 py-3 font-medium">Reason for Leaving</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {maid.history.map((record, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{record.employer}</td>
                      <td className="px-6 py-4">{record.period}</td>
                      <td className="px-6 py-4">{record.duties}</td>
                      <td className="px-6 py-4">{record.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
