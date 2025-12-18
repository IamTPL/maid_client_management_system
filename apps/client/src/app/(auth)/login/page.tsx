'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [role, setRole] = useState<'staff' | 'client'>('staff');

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Left Column: Branding */}
      <div className="hidden w-1/3 flex-col justify-center bg-blue-600 px-12 text-white lg:flex">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">1-Alliance Maids</h1>
          <p className="mt-4 text-lg text-blue-100">
            Connecting homeowners with professional maids in Singapore.
          </p>
        </div>

        <div className="border-t border-blue-400 pt-8">
          <h3 className="mb-6 text-lg font-semibold">Login as a...</h3>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
                1
              </div>
              <div>
                <p className="font-medium">Client to track your application.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600">
                2
              </div>
              <div>
                <p className="font-medium">Staff to manage operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="flex w-full flex-col justify-center px-8 lg:w-2/3 lg:px-24 xl:px-32">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Welcome!</h2>
          <p className="mt-2 text-gray-600">Please select your role and login to continue.</p>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="your.email@example.com"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="*****************"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/dashboard">
                <button
                  type="button" // Change to submit when connected to API
                  className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Login (Staff)
                </button>
              </Link>

              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-gray-800 px-4 py-3 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
              >
                Login (Homeowner)
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
