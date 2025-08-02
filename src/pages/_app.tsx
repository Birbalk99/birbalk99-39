// _app.tsx or layout.tsx
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class" // This adds/removes "dark" class on <html>
      defaultTheme="system"
      enableSystem={true}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
