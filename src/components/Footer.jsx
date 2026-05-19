import { Link } from 'react-router-dom';

const socialLinks = [
  { href: 'https://github.com/Yosef-Ayman', label: 'GitHub', icon: "fa-brands fa-github" },
  { href: 'https://linkedin.com/in/yosef-ayman', label: 'LinkedIn', icon: "fa-brands fa-linkedin" },
  { href: 'https://discord.com/users/1288465534945464424', label: 'Discord', icon: "fa-brands fa-discord" },
  { href: 'https://facebook.com/profile.php?id=100058102656981', label: 'Facebook', icon: "fa-brands fa-facebook" },
  { href: 'https://instagram.com/yosef__ayman', label: 'Instagram', icon: "fa-brands fa-instagram" }
];

export default function Footer() {
  return (
      <footer className="site-footer">
        <div className="container footer-content">
          <div className="logo">
            <Link to="/" aria-label="Yosef Ayman home">
              YA
            </Link>
          </div>

          <nav className="footer-links" aria-label="Social links">
            {socialLinks.map(({ href, label, icon }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                >
                  <i className={icon}></i>
                </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          Copyright {new Date().getFullYear()} Yosef Ayman. All Rights Reserved.
        </div>
      </footer>
  );
}