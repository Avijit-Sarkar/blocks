import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Blocks",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={inter.className}>
      <body
        className="min-h-screen bg-slate-100  dark:bg-[#020817] antialiased"
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
