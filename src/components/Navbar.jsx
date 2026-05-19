import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-shell">
        <div className="logo">
          <NavLink to="/" aria-label="Yosef Ayman home">
            YA
          </NavLink>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" className={isOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
