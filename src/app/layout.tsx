import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Masereka Benet — Software Developer",
  description: "Portfolio of Masereka Benet, a Software Developer, Data Analyst, and UI/UX Designer in Kampala, Uganda.",
  openGraph: { title: "Masereka Benet — Software Developer", description: "Thoughtful interfaces. Useful technology. Built with curiosity.", type: "website" },
};

const themeScript = `(()=>{try{const t=localStorage.getItem('mb-theme');if(t==='light')document.documentElement.dataset.theme='light'}catch{}})()`;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{ __html: themeScript }} />{children}</body></html>;
}
