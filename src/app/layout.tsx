import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonal Rao | Data Scientist & Analytics Engineer | Sydney",
  description:
    "Data Scientist and Analytics Engineer based in Sydney. Master of Data Science from UTS. Experienced in Python, SQL, Machine Learning, Power BI, Tableau, dbt, Airflow, and GCP. Open to Data Analyst, BI Analyst, Data Engineer, and Data Scientist roles.",
  keywords: [
    "Data Scientist Sydney",
    "Data Analyst Sydney",
    "BI Analyst Australia",
    "Machine Learning Engineer",
    "Data Engineer Sydney",
    "Python SQL Tableau Power BI",
    "UTS Data Science",
    "Sonal Rao",
    "Analytics Engineer",
    "Business Intelligence",
    "dbt Airflow GCP",
  ],
  authors: [{ name: "Sonal Suhas Rao" }],
  openGraph: {
    title: "Sonal Rao | Data Scientist & Analytics Engineer",
    description:
      "Sydney-based Data Scientist with 2+ years enterprise experience and a Master of Data Science from UTS.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonal Rao | Data Scientist & Analytics Engineer",
    description: "Sydney-based Data Scientist — Python, SQL, ML, BI, Cloud.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
