'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';

export const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="bg-surface-primary shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-md">
        <Link href="/" className="text-xl font-bold text-text-primary">
          GamerShop
        </Link>
        <nav>
          <Link href="/cart" aria-label="Open shopping cart" className="relative">
            <Image
              src="/logos/at-Icons.svg"
              alt="Shopping Cart"
              width={24}
              height={24}
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};