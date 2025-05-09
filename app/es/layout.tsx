import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-white text-black">
        <Header lang="es" />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
