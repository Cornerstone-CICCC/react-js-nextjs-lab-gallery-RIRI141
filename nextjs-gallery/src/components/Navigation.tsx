import Link from "next/link";

export default function Navigation() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl">LOGO</div>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <Link
                href="/gallery"
                className="hover:text-blue-200 transition-colors"
              >
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
