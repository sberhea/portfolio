import './globals.css';
import { Instrument_Sans } from 'next/font/google'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} min-h-screen flex flex-col`}>
        <div className="flex-1">
            {children}
        </div>
      </body>
    </html>
  );
}
