'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/experience', label: 'experience' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="container nav-shell">
        <Link href="/" className="logo" aria-label="Yosef Ayman home">
          yosef
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <i className="fa-solid fa-x" style={{ fontsize : "20px" }}></i> : <i className="fa-solid fa-bars" style={{ fontsize : "20px" }}></i>}
        </button>

        <nav className={isOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={pathname === item.href ? 'active' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
