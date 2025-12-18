'use client';

import React from 'react';
import Link from 'next/link';
import { Eye } from 'lucide-react';

interface ProcessCase {
  id: string;
  clientName: string;
  candidateName: string;
  status: 'Pending Payment' | 'Interview' | 'MOM Submitted' | 'Pending Documents';
  pic: string;
  inquiryDate: string;
}

const MOCK_DATA: ProcessCase[] = [
  {
    id: '1',
    clientName: 'Trần Văn An',
    candidateName: 'Maria Dela Cruz',
    status: 'Pending Payment',
    pic: 'Linh (Sales)',
    inquiryDate: '2025-10-15',
  },
  {
    id: '2',
    clientName: 'Lê Thị Bích',
    candidateName: 'Siti Hartati',
    status: 'Interview',
    pic: 'Huy (Admin)',
    inquiryDate: '2025-10-14',
  },
  {
    id: '3',
    clientName: 'Phạm Gia Hân',
    candidateName: 'Yuli Astuti',
    status: 'MOM Submitted',
    pic: 'Linh (Sales)',
    inquiryDate: '2025-10-12',
  },
  {
    id: '4',
    clientName: 'David Wilson',
    candidateName: 'Anisa Putri',
    status: 'Pending Documents',
    pic: 'Huy (Admin)',
    inquiryDate: '2025-10-11',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Pending Payment':
      return 'bg-yellow-100 text-yellow-800';
    case 'Interview':
      return 'bg-purple-100 text-purple-800';
    case 'MOM Submitted':
      return 'bg-green-100 text-green-800';
    case 'Pending Documents':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function ProcessManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Process Management</h1>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
          Export CSV
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">Client</th>
                <th className="px-6 py-4 font-medium">Candidate</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">PIC</th>
                <th className="px-6 py-4 font-medium">Inquiry Date</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {MOCK_DATA.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.clientName}</td>
                  <td className="px-6 py-4">{item.candidateName}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{item.pic}</td>
                  <td className="px-6 py-4">{item.inquiryDate}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/cases/${item.id}`}
                      className="flex items-center gap-1 font-medium text-blue-600 hover:text-blue-500"
                    >
                      <Eye className="h-4 w-4" />
                      View Details
                    </Link>
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
