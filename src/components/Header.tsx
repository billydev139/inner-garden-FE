import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-[#564A8D] py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <span className="text-white text-xl font-bold">Inner Garden</span>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">
                <span className="text-white">About</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-white">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
