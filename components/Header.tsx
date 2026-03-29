'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Header = () => {
  const pathname = usePathname();

  return (
    <header  >
  <div className="inner mx-auto px-4 sm:px-6 w-full max-w-500">
    <Link href="/" aria-label="Go to homepage">
      <Image
        src="/logo.png"
        alt="CoinPulse logo"
        width={250}
        height={40}
        loading="eager"
        style={{ height: 'auto', width: 'auto' }}
      />
    </Link>

    <nav>
      <Link href="/" className={cn('nav-link', 'is-home', { 'is-active': pathname === '/' })}>
        Home
      </Link>

               <p>Search Modal</p>

      <Link href="/coins" className={cn('nav-link', { 'is-active': pathname === '/coins' })}>
        All Coins
      </Link>
    </nav>
  </div>
</header>
  );
};

export default Header;