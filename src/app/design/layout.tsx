import '../globals.css';
import { Instrument_Sans } from 'next/font/google'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
})

// app/design/layout.tsx
export default function DesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
        <div className="bg-white">
            {children}
        </div>
    </div>
  );
}
