import type { Metadata } from 'next';
import { cardItems } from '@/utils/services';
import ServiceDetailClient from './ServiceDetailClient';

interface Props {
  params: { slug: string };
}

// Dynamic metadata based on the slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const service = cardItems.find(item => item.link === `/services/${slug}`);

  if (!service) {
    return {
      title: 'Service Not Found - Mitra Systems Ltd',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} - Mitra Systems Ltd`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Mitra Systems Ltd`,
      description: service.description,
      url: `https://www.mitrasystems.com/services/${slug}`,
      siteName: 'Mitra Systems Ltd',
      images: [
        {
          url: '/images/services-og-image.jpg', // You can make this dynamic if each service has a unique image
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} - Mitra Systems Ltd`,
      description: service.description,
      images: ['/images/services-og-image.jpg'],
    },
  };
}

export default function Page() {
  return <ServiceDetailClient />;
}