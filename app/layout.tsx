import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import { NavigationLoader } from "@/components/navigation-loader"
import { ConditionalChrome, ConditionalMain } from "@/components/conditional-chrome"
import { Suspense } from "react"
import Script from "next/script"
import { SITE } from "@/lib/site"
import { factorySchema, jsonLd, organizationSchema, websiteSchema } from "@/lib/seo"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

const OG_IMAGE = {
  url: "/images/factory/automated-factory-floor.jpg",
  width: 1620,
  height: 1080,
  alt: "Automated TOPCon solar module production line at Shweta Solar",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Shweta Solar | n-type TOPCon Solar Module Manufacturer in India",
    template: "%s | Shweta Solar",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "TOPCon solar panel manufacturer India",
    "n-type TOPCon bifacial module",
    "glass to glass solar panel",
    "ALMM List-I solar module",
    "BIS certified solar panel",
    "solar panel manufacturer Uttar Pradesh",
    "725W solar panel",
    "725W solar module",
    "PM Surya Ghar solar panel",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  alternates: { canonical: "/" },
  category: "Solar energy manufacturing",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "Shweta Solar | n-type TOPCon Solar Module Manufacturer in India",
    description: SITE.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shwetasolar",
    creator: "@shwetasolar",
    title: "Shweta Solar | n-type TOPCon Solar Module Manufacturer in India",
    description: SITE.description,
    images: [OG_IMAGE.url],
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
  formatDetection: { telephone: true, email: true },
}

export const viewport: Viewport = {
  themeColor: "#004636",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className={`${poppins.variable} bg-background`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([organizationSchema(), websiteSchema(), factorySchema()])} />
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
      <body className="antialiased overflow-x-hidden bg-background font-sans text-foreground">
        {/* Google Ads tag — AW-18305200129 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18305200129" strategy="afterInteractive" />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18305200129');
          `}
        </Script>

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.onerror=function(){};t.src=v;s=b.getElementsByTagName(e)[0];
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
        <ConditionalChrome>
          <Navigation />
        </ConditionalChrome>
        <ConditionalMain>{children}</ConditionalMain>
        <ConditionalChrome>
          <Footer />
          <WhatsAppFloat />
        </ConditionalChrome>
      </body>
    </html>
  )
}
