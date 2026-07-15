import "./globals.css";

export const metadata = {
  title: "Rakesh Vishwakarma | Software Engineer",
  description:
    "Portfolio of Rakesh Vishwakarma, a backend-focused software engineer building scalable web applications and microservices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
