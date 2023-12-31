import Head from "next/head"

export default function AppHead() {
  const metadata = {
    directory: "submission",
    url: "https://safha-web.vercel.app",
    identifierURL: "https://safha-web.vercel.app",
    title: "Safha - AI Powered Website Builder",
    description: `The SaaS company Safha.com specializes in a cutting-edge AI text-to-website and business enablement platform. Safha.com innovative platform transforms plain text into fully functional and aesthetically pleasing websites with just a few clicks. It uses advanced AI algorithms to interpret text input, understanding the context and intended layout. Users can simply type or paste their content, and the platform intelligently organizes it into a web-friendly format, choosing suitable fonts, colors, and layouts that best fit the text's tone and purpose.`,
    subject: `The SaaS company Safha.com specializes in a cutting-edge AI text-to-website and business enablement platform. Safha.com innovative platform transforms plain text into fully functional and aesthetically pleasing websites with just a few clicks. It uses advanced AI algorithms to interpret text input, understanding the context and intended layout. Users can simply type or paste their content, and the platform intelligently organizes it into a web-friendly format, choosing suitable fonts, colors, and layouts that best fit the text's tone and purpose.`,
    copyright: "Safha",
    language: "en",
    robots: "all",
    icon: "/favicon.png",
    themeColor: "#50F5AC",
    generator: "Safha",
    designer: "safha.com",
    applicationName: "Safha",
    referrer: "origin-when-cross-origin",
    keywords: ["Safha", "ثقافة ريادة الأعمال", "2030", "محمد بن سلمان"],
    replyTo: "hi@safha.com",
    owner: "Safha",
    authors: [
      {
        name: "Safha",
        email: "hi@safha.com",
        url: "https://safha-web.vercel.app",
      },
    ],
    colorScheme: "light",
    creator: "Safha",
    publisher: "Safha",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: "Safha - AI Powered Website Builder",
      description: `The SaaS company Safha.com specializes in a cutting-edge AI text-to-website and business enablement platform. Safha.com innovative platform transforms plain text into fully functional and aesthetically pleasing websites with just a few clicks. It uses advanced AI algorithms to interpret text input, understanding the context and intended layout. Users can simply type or paste their content, and the platform intelligently organizes it into a web-friendly format, choosing suitable fonts, colors, and layouts that best fit the text's tone and purpose.`,
      url: "https://safha-web.vercel.app",
      siteName: "Safha - AI Powered Website Builder",
      images: [
        {
          key: "md",
          url: `/main.png`,
          alt: "Safha logo in a banner",
          width: 800,
          height: 600,
        },
      ],
      locale: "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Safha - AI Powered Website Builder",
      description: `The SaaS company Safha.com specializes in a cutting-edge AI text-to-website and business enablement platform. Safha.com innovative platform transforms plain text into fully functional and aesthetically pleasing websites with just a few clicks. It uses advanced AI algorithms to interpret text input, understanding the context and intended layout. Users can simply type or paste their content, and the platform intelligently organizes it into a web-friendly format, choosing suitable fonts, colors, and layouts that best fit the text's tone and purpose.`,
      siteId: "@SafhaSA",
      creator: "@SafhaSA",
      creatorId: "@SafhaSA",
      images: [`/main.png`],
      domain: "Safha.gov.sa",
      url: "https://safha-web.vercel.app",
    },
  }
  return (
    <Head>
      {/* Basic HTML Meta Tags */}
      <title>{metadata.title}</title>
      <link rel="shortcut icon" href={metadata.icon} />
      <meta name="keywords" content={metadata.keywords.toString()} />
      <meta name="description" content={metadata.description} />
      <meta name="subject" content={metadata.subject} />
      <meta name="copyright" content={metadata.copyright} />
      <meta name="language" content={metadata.language} />
      <meta name="robots" content={metadata.robots} />
      <meta name="theme-color" content={metadata.themeColor} />
      <link rel="icon" type="image/x-icon" href={metadata.icon} />
      <meta
        name="author"
        content={`${metadata.authors[0].name}, ${metadata.authors[0].email}`}
      />
      <meta name="designer" content={metadata.designer} />
      <meta name="reply-to" content={metadata.replyTo} />
      <meta name="owner" content={metadata.owner} />
      <meta name="url" content={metadata.url} />
      <meta name="identifier-URL" content={metadata.identifierURL} />
      <meta name="directory" content={metadata.directory} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:locale" content={metadata.openGraph.locale} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:site" content={metadata.twitter.siteId} />
      <meta name="twitter:creator" content={metadata.twitter.creatorId} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.images[0]} />
      <meta property="twitter:domain" content={metadata.twitter.domain} />
      <meta property="twitter:url" content={metadata.twitter.url} />
    </Head>
  )
}
