import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Not Found</h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          The page you're trying to visit doesn't exist!
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Home Page
        </Link>
      </div>
    </div>
  );
}
