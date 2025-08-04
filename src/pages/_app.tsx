// _app.tsx or layout.tsx
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class" // This adds/removes "dark" class on <html>
      defaultTheme="system"
      enableSystem={true}
    >
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
