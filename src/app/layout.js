import './globals.css';
import { SITE } from '@/data/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultTitle,
    template: `%s | ${SITE.author}`
  },
  description: SITE.description,
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: '3wvITE0pVr-ZN_4dGhijKs3VnYEl1mT1-6lgQKdEc30',
  },
  openGraph: {
    title: SITE.defaultTitle,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" rel="stylesheet"/>
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
