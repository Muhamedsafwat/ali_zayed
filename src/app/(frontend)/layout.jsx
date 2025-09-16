import { Cairo } from "next/font/google"; // استخدم خط مدعوم
import "./globals.css";

import NavBar from "./_common/NavBar";
import Footer from "./_common/Footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["200", "400", "500", "700"],
});

// export const metadata = {
//   title: "Al Helal Systems | انظمة الهلال للانذار والحريق",
//   description:
//     "Al Helal Systems provides high-quality firefighting and alarm solutions, importing advanced technology solutions for poultry and animal health, ensuring safe food for humans.",
//   keywords:
//     "firefighting systems, alarm systems, Al Helal Systems, انظمة الهلال للانذار والحريق",
//   authors: [{ name: "Al Helal Systems" }],
//   creator: "Al Helal Systems",
//   publisher: "Al Helal Systems",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL("https://alhelalsystems.com"),
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     title: "Al Helal Systems | انظمة الهلال للانذار والحريق",
//     description: "Leading provider of firefighting and alarm systems",
//     url: "https://alhelalsystems.com",
//     siteName: "Al Helal Systems",
//     images: [
//       {
//         url: "/img/logo.png",
//         width: 800,
//         height: 600,
//         alt: "Al Helal Systems Logo",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Al Helal Systems | انظمة الهلال للانذار والحريق",
//     description: "Leading provider of firefighting and alarm systems",
//     images: ["/img/logo.png"],
//     creator: "@alhelalsystems",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     icon: "/img/logo.png",
//     apple: "/img/logo.png",
//   },
// };

export default async function layout({ children }) {
  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "Al Helal Systems",
  //   description:
  //     "Leading provider of firefighting and alarm solutions for animal health",
  //   url: "https://alhelalsystems.com",
  //   logo: "https://alhelalsystems.com/img/logo.png",
  //   sameAs: [
  //     "https://www.facebook.com/AlHelalSystems",
  //     "https://www.linkedin.com/company/alhelalsystems",
  //   ],
  //   contactPoint: {
  //     "@type": "ContactPoint",
  //     telephone: "+201003361649",
  //     contactType: "customer service",
  //     areaServed: "Egypt",
  //     availableLanguage: ["English", "Arabic"],
  //   },
  // };

  return (
    <html className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta
          name="keywords"
          content="ipc,Veterinary,products,animals,safe food for humans.,Al Helal Systems, انظمة الهلال للانذار والحريق"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        /> */}
      </head>
      <body
        data-theme="mytheme"
        className={`${cairo.className} antialiased overscroll-none bg-[#111] text-white max-w-[100vwz] min-h-screen overflow-x-hidden`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
