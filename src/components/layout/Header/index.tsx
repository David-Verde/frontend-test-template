import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-surface-primary shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-md">
        <Link href="/" className="text-xl font-bold text-text-primary">
          GamerShop
        </Link>
        <nav>
          <Link href="/cart" aria-label="Open shopping cart">
            <Image
              src="/logos/at-Icons.svg"
              alt="Shopping Cart"
              width={24}
              height={24}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};