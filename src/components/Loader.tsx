"use client";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-2 p-6">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 dark:border-gray-600 dark:border-t-white"></div>
      <span className="text-sm text-gray-600 dark:text-gray-300">Loading...</span>
    </div>
  );
}
