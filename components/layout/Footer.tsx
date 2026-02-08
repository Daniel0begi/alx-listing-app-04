export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-900">ALX Listing App</p>
            <p className="mt-2 text-sm text-gray-600">
              Luxury property listings with filters and responsive UI.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <p className="text-sm font-semibold text-gray-900">Company</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">Support</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>Help Center</li>
                <li>Safety</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} ALX Listing App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
