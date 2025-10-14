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
