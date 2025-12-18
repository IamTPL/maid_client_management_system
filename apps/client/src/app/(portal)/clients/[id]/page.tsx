'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Pencil } from 'lucide-react';

// --- Mock Data ---

const MOCK_CLIENT_DETAIL = {
  id: '1',
  name: 'Trần Văn An',
  phone: '+65 9123 4567',
  email: 'an.tran@example.com',
  address: '123 Orchard Road, #10-11, Singapore 238823',
  pic: 'Linh (Sales)',
  activeCases: [
    {
      id: '1',
      candidate: 'Maria Dela Cruz',
      status: 'Pending Payment',
    },
  ],
};

export default function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = use(params);
  const client = MOCK_CLIENT_DETAIL; // In real app, fetch by ID

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white p-2 shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
            <Link href="/clients">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </Link>
          </div>
          <div>
            <p className="text-sm text-gray-500">Back to Client List</p>
            <h1 className="text-2xl font-bold text-gray-900">{client.name}</h1>
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
          <Pencil className="h-4 w-4" />
          Edit Client
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column: Contact Info */}
        <div className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Contact Information</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div className="grid grid-cols-3 gap-2">
              <span className="font-medium text-gray-900">Phone:</span>
              <span className="col-span-2 text-blue-600 font-medium">{client.phone}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="font-medium text-gray-900">Email:</span>
              <span className="col-span-2">{client.email}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="font-medium text-gray-900">Address:</span>
              <span className="col-span-2">{client.address}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="font-medium text-gray-900">PIC:</span>
              <span className="col-span-2">{client.pic}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Active Cases */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Active Cases</h2>
          <div className="overflow-hidden rounded-lg border border-gray-100">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Case ID</th>
                  <th className="px-6 py-3 font-medium">Candidate</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {client.activeCases.map((activeCase) => (
                  <tr key={activeCase.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">#{activeCase.id}</td>
                    <td className="px-6 py-4">{activeCase.candidate}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                        {activeCase.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
