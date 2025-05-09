import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Nelson Dario',
    template: '%s | Nelson Dario',
  },
  description:
    'Awakening | Empowerment | Evolution. Coaching, design, and spiritual tools to transform your life and business.',
  metadataBase: new URL('https://www.nelsondario.com'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: 'Nelson Dario',
    description:
      'Awakening | Empowerment | Evolution. Services to align your life and business with your higher purpose.',
    url: 'https://www.nelsondario.com',
    siteName: 'Nelson Dario',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nelson Dario Banner',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nelson Dario',
    description: 'Awakening | Empowerment | Evolution.',
    creator: '@yourhandle',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-black">
        <Header lang="en" />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
