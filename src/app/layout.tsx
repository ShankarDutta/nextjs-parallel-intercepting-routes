import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { geistMono, geistSans } from "@/lib/fonts";
import { RootLayoutProps } from "@/lib/type";
import "./globals.css";

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}>
          <Header />

          <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
