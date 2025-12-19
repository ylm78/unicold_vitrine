// Données structurées Schema.org pour le SEO

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Unicold",
  "description": "Installation, vente et maintenance de chambres froides professionnelles. Dépannage 24/7. Solutions sur-mesure pour restauration, commerce et industrie.",
  "url": "https://unicold.fr",
  "telephone": "+33172541360",
  "email": "contact@unicold.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "16 Rue Pascal",
    "addressLocality": "Poissy",
    "postalCode": "78300",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.928",
    "longitude": "2.122"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Paris"
    },
    {
      "@type": "City",
      "name": "Lyon"
    },
    {
      "@type": "City",
      "name": "Marseille"
    },
    {
      "@type": "State",
      "name": "Île-de-France"
    },
    {
      "@type": "State",
      "name": "Centre-Val de Loire"
    }
  ],
  "priceRange": "€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:00"
    }
  ],
  "serviceType": [
    "Installation de chambre froide",
    "Vente de chambre froide",
    "Maintenance de chambre froide",
    "Dépannage de chambre froide",
    "Chambre froide positive",
    "Chambre froide négative"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Unicold",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Installation de chambre froide professionnelle"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maintenance et dépannage 24/7"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vente de chambres froides sur-mesure"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/unicold.unicold.7/",
    "https://www.instagram.com/uni.cold/",
    "https://linkedin.com/company/unicold"
  ]
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Unicold",
  "url": "https://unicold.fr",
  "logo": "https://unicold.fr/unicold-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33172541360",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  },
  "sameAs": [
    "https://www.facebook.com/unicold.unicold.7/",
    "https://www.instagram.com/uni.cold/",
    "https://linkedin.com/company/unicold"
  ]
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getServiceSchema = (serviceName: string, description: string, areaServed?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Unicold",
    "telephone": "+33172541360"
  },
  ...(areaServed && {
    "areaServed": {
      "@type": "City",
      "name": areaServed
    }
  })
});

