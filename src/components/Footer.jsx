import Link from 'next/link';
import { socialLinks } from '@/data/site';

const icons = {
  GitHub: "fab fa-github",
  LinkedIn: "fab fa-linkedin",
  Discord: "fab fa-discord",
  Facebook: "fab fa-facebook",
  Instagram: "fab fa-instagram"
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <Link href="/" className="logo" aria-label="Yosef Ayman home">
          yosef
        </Link>

        <nav className="footer-links" aria-label="Social links">
          {socialLinks.map(({ href, label }) => {
            const Icon = icons[label];
            return (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <i className={Icon} style={{ fontSize: "17px" }}></i>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="footer-bottom">// copyright {new Date().getFullYear()} yosef ayman — all rights reserved</div>
    </footer>
  );
}
