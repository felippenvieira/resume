import './globals.css';
import { Fira_Sans } from 'next/font/google';

const fira = Fira_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Felippe Vieira - Front-End Developer',
  description:
    'Felippe Vieira - Front-End Developer | Next.js | React.js | TailwindCSS | JavaScript | HTML | CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
