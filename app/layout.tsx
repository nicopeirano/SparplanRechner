import "./globals.css";


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
        <a href="/" className="btn">Sparplan Rechner</a>
          <a href="/about" className="btn">Über mich</a>
      </div>
        
        {children}
      </body>
    </html>
  );
}
