'use client';

import React, { use } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  FileText,
  Upload,
  ExternalLink,
  Wand2,
} from 'lucide-react';

// --- Mock Data ---

const MOCK_CASE = {
  id: '1',
  clientName: 'Trần Văn An',
  candidateName: 'Maria Dela Cruz',
  timeline: [
    { title: 'Inquiry Received', date: '2025-10-15', status: 'completed' },
    { title: 'Candidate Selected', date: '2025-10-16', status: 'completed' },
    { title: 'Interview Scheduled', date: '2025-10-17', status: 'completed' },
    { title: 'Payment Request Sent', date: '2025-10-18', status: 'completed' },
    { title: 'Pending Payment', date: 'Now', status: 'current' },
    { title: 'Submit to MOM', date: '', status: 'pending' },
    { title: 'Handover', date: '', status: 'pending' },
  ],
  documents: [
    { name: 'IPA (Employer)', status: 'Verified', updated: '2025-10-20' },
    { name: 'Insurance Form', status: 'Pending Upload', updated: '-' },
    { name: 'Passport (Helper)', status: 'Uploaded', updated: '2025-10-16' },
  ],
};

// --- Components ---

function TimelineItem({
  item,
  isLast,
}: {
  item: { title: string; date: string; status: string };
  isLast: boolean;
}) {
  let Icon = Circle;
  let colorClass = 'text-gray-300';
  let contentColor = 'text-gray-500';

  if (item.status === 'completed') {
    Icon = CheckCircle2;
    colorClass = 'text-green-500';
    contentColor = 'text-gray-900';
  } else if (item.status === 'current') {
    Icon = Clock;
    colorClass = 'text-blue-600';
    contentColor = 'text-blue-600 font-medium';
  }

  return (
    <div className="relative flex gap-4 pb-8">
      {!isLast && (
        <span
          className="absolute left-[11px] top-8 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        />
      )}
      <div className="relative flex h-6 w-6 shrink-0 items-center justify-center bg-white">
        <Icon className={`h-6 w-6 ${colorClass}`} />
      </div>
      <div>
        <p className={`text-sm ${contentColor}`}>{item.title}</p>
        {item.date && item.date !== '-' && <p className="text-xs text-gray-400">{item.date}</p>}
      </div>
    </div>
  );
}

function DocumentRow({ doc }: { doc: { name: string; status: string; updated: string } }) {
  let statusBadgeColor = 'bg-gray-100 text-gray-800';
  let actionText = 'Upload';
  let ActionIcon = Upload;

  if (doc.status === 'Verified') {
    statusBadgeColor = 'bg-green-100 text-green-800';
    actionText = 'View';
    ActionIcon = ExternalLink;
  } else if (doc.status === 'Uploaded') {
    statusBadgeColor = 'bg-yellow-100 text-yellow-800';
    actionText = 'Verify';
    ActionIcon = CheckCircle2;
  } else if (doc.status === 'Pending Upload') {
    statusBadgeColor = 'bg-orange-100 text-orange-800';
  }

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
          <FileText className="h-5 w-5 text-gray-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{doc.name}</p>
          <p className="text-xs text-gray-500">Updated: {doc.updated}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadgeColor}`}
        >
          {doc.status}
        </span>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center gap-1">
          <ActionIcon className="w-4 h-4" /> {actionText}
        </button>
      </div>
    </div>
  );
}

export default function CaseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = use(params);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-white p-2 shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Case Details #{MOCK_CASE.id}</h1>
          <p className="text-sm text-gray-500">
            Client: <span className="font-medium text-gray-900">{MOCK_CASE.clientName}</span> |
            Candidate: <span className="font-medium text-gray-900">{MOCK_CASE.candidateName}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column: Timeline */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Case Timeline</h2>
          <div className="ml-2">
            {MOCK_CASE.timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isLast={index === MOCK_CASE.timeline.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Actions */}
        <div className="space-y-6">
          {/* Quick Actions Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-gray-900">Your Tasks</h2>
            <button className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Send Payment Request
            </button>

            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="text-xs text-gray-500 mb-2">Compose Update Email</p>
              <p className="text-xs text-gray-400 mb-3">
                Use Gemini AI to generate a client update email.
              </p>
              <button className="flex w-full items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500">
                <Wand2 className="w-4 h-4" /> Quick Draft
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Document Management */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Document Management</h2>
        <div className="divide-y divide-gray-100">
          {MOCK_CASE.documents.map((doc, index) => (
            <DocumentRow key={index} doc={doc} />
          ))}
        </div>
      </div>
    </div>
  );
}
