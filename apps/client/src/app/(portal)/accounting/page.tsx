'use client';

import React, { useState } from 'react';
import { DollarSign, FileText, Tag } from 'lucide-react';

// --- Mock Data ---

const MOCK_SERVICES = [
  {
    id: 1,
    name: 'Maid Placement Package (New)',
    price: '$1,288',
    category: 'Placement',
  },
  { id: 2, name: 'Maid Renewal Service', price: '$388', category: 'Renewal' },
  {
    id: 3,
    name: 'Direct Hire Processing',
    price: '$888',
    category: 'Processing',
  },
  {
    id: 4,
    name: 'Airport Shuttle Service',
    price: '$80',
    category: 'Logistics',
  },
];

const MOCK_INVOICES = [
  {
    id: 'INV-2023-001',
    client: 'Trần Văn An',
    amount: '$1,288',
    date: '2023-10-20',
    status: 'Paid',
  },
  {
    id: 'INV-2023-002',
    client: 'Lê Thị Bích',
    amount: '$388',
    date: '2023-10-22',
    status: 'Pending',
  },
];

export default function AccountingPage() {
  const [activeTab, setActiveTab] = useState<'services' | 'invoices'>('services');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Accounting</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
              activeTab === 'services'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            <Tag className="h-4 w-4" />
            Pricing & Services
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
              activeTab === 'invoices'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            <DollarSign className="h-4 w-4" />
            Invoices & Payments
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === 'services' ? (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
                <Tag className="h-4 w-4" />
                Add Service
              </button>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-6 py-3 font-medium">Service Name</th>
                    <th className="px-6 py-3 font-medium">Category</th>
                    <th className="px-6 py-3 font-medium text-right">Price (SGD)</th>
                    <th className="px-6 py-3 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {MOCK_SERVICES.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{service.name}</td>
                      <td className="px-6 py-4">{service.category}</td>
                      <td className="px-6 py-4 text-right font-medium text-gray-900">
                        {service.price}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-blue-600 hover:text-blue-500 font-medium">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-6 py-3 font-medium">Invoice ID</th>
                    <th className="px-6 py-3 font-medium">Client</th>
                    <th className="px-6 py-3 font-medium">Date</th>
                    <th className="px-6 py-3 font-medium text-right">Amount</th>
                    <th className="px-6 py-3 font-medium text-center">Status</th>
                    <th className="px-6 py-3 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {MOCK_INVOICES.map((inv) => (
                    <tr key={inv.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{inv.id}</td>
                      <td className="px-6 py-4">{inv.client}</td>
                      <td className="px-6 py-4">{inv.date}</td>
                      <td className="px-6 py-4 text-right font-medium text-gray-900">
                        {inv.amount}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            inv.status === 'Paid'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-500 hover:text-gray-700 mr-3">
                          <FileText className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
