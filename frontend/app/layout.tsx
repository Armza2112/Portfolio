import "./globals.css";
import Navbar from "../components/Navbar";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900 px-[var(--padding-horizon)] py-10">
        <Navbar />
        <main className='pt-10'>{children}</main>
      </body>
    </html>
  );
}
