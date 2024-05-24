"use client";

export default function Button({ children, onClick, withoutMarginTop }) {
  return (
    <button
      onClick={onClick}
      className={`bg-white rounded-xl border-threads-gray-light w-full ${
        !withoutMarginTop && "mt-4"
      } p-4 hover:bg-gray-300`}
    >
      {children}
    </button>
  );
}
