import './globals.css';
import SiteShell from '../src/SiteShell';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eduraindia.com'),
  title: 'Edura India : Design, Coding, Marketing & Editing',
  icons: { icon: '/edura_logo.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
