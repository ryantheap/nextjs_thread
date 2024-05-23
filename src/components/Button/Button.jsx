"use client";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl border-threads-gray-light w-full mt-4 p-4 hover:bg-gray-300"
    >
      {children}
    </button>
  );
}
