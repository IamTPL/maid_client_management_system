'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Filter, Download, Plus } from 'lucide-react';

const MOCK_CLIENTS = [
  {
    id: '1',
    name: 'Trần Văn An',
    phone: '+65 9123 4567',
    email: 'an.tran@example.com',
    activeCases: 1,
    pic: 'Linh (Sales)',
  },
  {
    id: '2',
    name: 'Lê Thị Bích',
    phone: '+65 9876 5432',
    email: 'bich.le@example.com',
    activeCases: 1,
    pic: 'Huy (Admin)',
  },
  {
    id: '3',
    name: 'Phạm Gia Hân',
    phone: '+65 9234 5678',
    email: 'han.pham@example.com',
    activeCases: 1,
    pic: 'Linh (Sales)',
  },
];

export default function ClientListPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Client Management</h1>
        <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
          <Plus className="h-4 w-4" />
          Add New Client
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 bg-white p-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, phone..."
            className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filters
          </button>
          <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Download className="h-4 w-4" />
            Export CSV
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
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium text-center">Active Cases</th>
                <th className="px-6 py-4 font-medium">PIC</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_CLIENTS.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{client.name}</td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900">{client.phone}</p>
                    <p className="text-xs text-gray-500">{client.email}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-blue-50 px-2 text-xs font-medium text-blue-700">
                      {client.activeCases}
                    </span>
                  </td>
                  <td className="px-6 py-4">{client.pic}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 text-sm font-medium">
                      <Link
                        href={`/clients/${client.id}`}
                        className="text-blue-600 hover:text-blue-500"
                      >
                        Details
                      </Link>
                      <button className="text-gray-500 hover:text-gray-700">Edit</button>
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
