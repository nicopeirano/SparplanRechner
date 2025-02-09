import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: "Sparplan Rechner",
  description: "Berechne deinen Sparplan mit Zinseszins",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" data-theme="light">
      <body>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <Link href="/" className="btn">Sparplan Rechner</Link>
        <Link href="/about" className="btn">Über mich</Link>
      </div>
        
        {children}
      </body>
    </html>
  );
}
