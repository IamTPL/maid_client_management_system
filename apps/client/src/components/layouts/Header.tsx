'use client';

import React from 'react';
import { Search, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
      {/* Search Bar */}
      <div className="flex w-full max-w-md items-center rounded-md border border-gray-300 bg-white px-3 py-2 transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Search className="h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search for clients, maids, cases..."
          className="ml-2 w-full border-none bg-transparent p-0 text-sm placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600">
            S
          </div>
          <div className="hidden text-sm md:block">
            <p className="font-semibold text-gray-900">Henry Lee</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
