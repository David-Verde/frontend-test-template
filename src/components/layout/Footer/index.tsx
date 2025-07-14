import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-surface-tertiary flex items-center justify-center p-md">
      <Link href="/">
        <Image
          src="/logos/ApplyDigitalLogo.svg"
          alt="Apply Digital Logo"
          width={150}
          height={36}
          priority
        />
      </Link>
    </footer>
  );
};