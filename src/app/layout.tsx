import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casey Barr — Helping Organizations & People Become Antifragile",
  description:
    "I help organizations and the people inside them navigate change and come out stronger. 60+ enterprise deployments. Building Shortlist.ai, Do North Strategy, and The Forge.",
  openGraph: {
    title: "Casey Barr — Helping Organizations & People Become Antifragile",
    description:
      "I help organizations and the people inside them navigate change and come out stronger. 60+ enterprise deployments across Boeing, Nike, Morgan Stanley, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'DM Sans', sans-serif",
          boxSizing: "border-box",
        }}
      >
        {children}
      </body>
    </html>
  );
}
