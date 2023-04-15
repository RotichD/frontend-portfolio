import './globals.css';
import NavBar from '@/components/NavBar';
import { Roboto_Condensed, Cabin } from 'next/font/google';

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-cabin',
});

export const metadata = {
  title: 'Dylan Rotich | Front-End Developer',
  description:
    'This portfolio showcases my work, skills, and experience as a Front-End Web Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} ${cabin.variable} font-cabin`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
