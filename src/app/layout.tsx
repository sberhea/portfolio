import './globals.css';
import { Inter, Playfair_Display, Lora } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Selam Berhea - Designer & Engineer',
  description: 'Designer, engineer, and writer with expertise in UX/UI design and software engineering.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Selam Berhea - Designer & Engineer',
    description: 'Designer, engineer, and writer with expertise in UX/UI design and software engineering.',
    url: 'https://selam.work',
    siteName: 'Selam Berhea Portfolio',
    images: [
      {
        url: 'https://selam.work/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Selam Berhea',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selam Berhea - Designer & Engineer',
    description: 'Designer, engineer, and writer with expertise in UX/UI design.',
    images: ['https://selam.work/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col {lora.className}">
        <div className="flex-1">
            {children}
        </div>
      </body>
    </html>
  );
}
