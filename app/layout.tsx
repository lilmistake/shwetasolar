import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import { NavigationLoader } from "@/components/navigation-loader"
import { Suspense } from "react"
import Script from "next/script"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap", // Added font-display swap for better performance
})

export const metadata: Metadata = {
  metadataBase: new URL("https://shwetasolar.in"),
  title: {
    default: "Shweta Solar - Leading Solar Panel Manufacturer in India",
    template: "%s | Shweta Solar",
  },
  description:
    "Shweta Solar manufactures high-efficiency Mono PERC and TopCon solar panels. Powering India's renewable energy future with sustainable solar solutions.",
  keywords: [
    "solar panels",
    "solar energy",
    "Mono PERC",
    "TopCon",
    "renewable energy",
    "India",
    "solar manufacturer",
  ],
  authors: [{ name: "Shweta Solar" }],
  creator: "Shweta Solar",
  publisher: "Shweta Solar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shwetasolar.in",
    siteName: "Shweta Solar",
    title: "Shweta Solar - Leading Solar Panel Manufacturer in India",
    description:
      "Shweta Solar manufactures high-efficiency Mono PERC and TopCon solar panels. Powering India's renewable energy future.",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Shweta Solar Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shwetasolar",
    creator: "@shwetasolar",
    title: "Shweta Solar - Leading Solar Panel Manufacturer in India",
    description: "High-efficiency solar panels for India's renewable energy future",
    images: ["/images/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "", // Placeholder for actual verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preload" as="image" href="/images/solar-hero.jpg" />
        <link rel="preload" as="image" href="/images/logo.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shweta Solar",
              url: "https://shwetasolar.in",
              logo: "https://shwetasolar.in/images/logo.webp",
              description:
                "Leading solar panel manufacturer in India specializing in Mono PERC and TopCon solar panels",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-1800-120-477120",
                contactType: "Customer Service",
                email: "admin@shwetasolar.in",
              },
              sameAs: [
                "https://x.com/shwetasolar",
                "https://www.instagram.com/shwetasolar/",
                "https://www.linkedin.com/company/shweta-solar-system/",
                "https://www.facebook.com/people/Shweta-Solar/61580012213135/",
              ],
            }),
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1360444929004525&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased overflow-x-hidden">
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1360444929004525');
            fbq('track', 'PageView');
          `}
        </Script>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        <Suspense fallback={null}>
          <NavigationLoader />
        </Suspense>
        <ScrollToTop />
        <Navigation />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
