'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, Users, UserSquare2, FileText, BarChart3, Settings, Menu } from 'lucide-react';

const NAV_ITEMS = [
  {
    name: 'Process Management',
    href: '/dashboard', // Assuming dashboard is the default for process
    icon: Briefcase,
  },
  {
    name: 'Client Management',
    href: '/clients',
    icon: Users,
  },
  {
    name: 'Maid Management',
    href: '/maids',
    icon: UserSquare2,
  },
  {
    name: 'Accounting',
    href: '/accounting',
    icon: FileText,
  },
  {
    name: 'Reporting',
    href: '/reporting',
    icon: BarChart3,
  },
  {
    name: 'Administration',
    href: '/admin',
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-gray-200 bg-white lg:flex">
      {/* Logo Area */}
      <div className="flex h-16 items-center border-b border-gray-100 px-6">
        <div className="flex items-center gap-2 text-blue-600">
          <Menu className="h-6 w-6" /> {/* Placeholder for logo icon if needed */}
          <span className="text-xl font-bold tracking-tight">1-Alliance</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-6">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              <item.icon
                className={`h-5 w-5 shrink-0 ${
                  isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
