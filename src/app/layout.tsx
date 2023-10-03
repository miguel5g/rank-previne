import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';

const font = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Ranking Previne Brasil',
  description: 'Ranking Previne Brasil',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <span className="hidden text-blue-700" />
        <span className="hidden text-green-700" />
        <span className="hidden text-yellow-700" />
        <span className="hidden text-red-700" />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
