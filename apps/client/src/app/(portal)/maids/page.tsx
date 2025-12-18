'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Filter, Plus, Calendar } from 'lucide-react';

// --- Mock Data ---

const MOCK_MAIDS = [
  {
    id: '1',
    name: 'Maria Dela Cruz',
    nationality: 'Philippines',
    age: 32,
    status: 'Available',
    experience: '4 Years',
    pic: 'Linh (Sales)',
  },
  {
    id: '2',
    name: 'Siti Nurhaliza',
    nationality: 'Indonesia',
    age: 28,
    status: 'Matched',
    experience: 'Fresh',
    pic: 'Linh (Sales)',
  },
  {
    id: '3',
    name: 'Aye Myat Thu',
    nationality: 'Myanmar',
    age: 25,
    status: 'Available',
    experience: '2 Years',
    pic: 'Huy (Admin)',
  },
];

export default function MaidListPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Maid Management</h1>
        <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
          <Plus className="h-4 w-4" />
          Add New Maid
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 bg-white p-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, nationality..."
            className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filter Status
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Nationality</th>
                <th className="px-6 py-4 font-medium">Age</th>
                <th className="px-6 py-4 font-medium">Experience</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">PIC</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_MAIDS.map((maid) => (
                <tr key={maid.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                        {maid.name.charAt(0)}
                      </div>
                      {maid.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">{maid.nationality}</td>
                  <td className="px-6 py-4">{maid.age}</td>
                  <td className="px-6 py-4">{maid.experience}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        maid.status === 'Available'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {maid.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{maid.pic}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-sm font-medium">
                      <Link
                        href={`/maids/${maid.id}`}
                        className="text-blue-600 hover:text-blue-500"
                      >
                        View Profile
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
