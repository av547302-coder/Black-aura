import { Property, TeamMember, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Royal Palm Estate',
    price: '₹12.5 Cr',
    location: 'Bandra West, Mumbai',
    beds: 5,
    baths: 6,
    sqft: 4500,
    type: 'Villa',
    featured: true,
    image: 'https://picsum.photos/id/1040/800/600',
    description: 'An architectural masterpiece overlooking the Arabian Sea. This triplex villa features a private pool, home theater, and Italian marble flooring throughout. Designed for those who seek absolute exclusivity.',
    features: ['Sea View', 'Private Pool', 'Home Theater', 'Smart Home', '5 Parking Spots'],
    images: ['https://picsum.photos/id/1040/800/600', 'https://picsum.photos/id/1035/800/600', 'https://picsum.photos/id/1029/800/600']
  },
  {
    id: '2',
    title: 'Skyline Penthouse',
    price: '₹8.2 Cr',
    location: 'Whitefield, Bangalore',
    beds: 4,
    baths: 4,
    sqft: 3200,
    type: 'Penthouse',
    featured: true,
    image: 'https://picsum.photos/id/1039/800/600',
    description: 'Perched on the 45th floor, this penthouse offers 360-degree views of the garden city. Features a wrap-around terrace and bespoke interiors by international designers.',
    features: ['Panoramic View', 'Private Lift', 'Terrace Garden', 'Concierge Service'],
    images: ['https://picsum.photos/id/1039/800/600', 'https://picsum.photos/id/1033/800/600', 'https://picsum.photos/id/1028/800/600']
  },
  {
    id: '3',
    title: 'Aurum Residency',
    price: '₹5.5 Cr',
    location: 'Jubilee Hills, Hyderabad',
    beds: 4,
    baths: 5,
    sqft: 3800,
    type: 'Apartment',
    featured: false,
    image: 'https://picsum.photos/id/1038/800/600',
    description: 'Luxury redefined in the heart of Hyderabad. Aurum Residency blends traditional aesthetics with modern amenities. Close to top international schools and tech parks.',
    features: ['Clubhouse', 'Gym', 'Spa', '24/7 Security'],
    images: ['https://picsum.photos/id/1038/800/600', 'https://picsum.photos/id/1032/800/600', 'https://picsum.photos/id/1027/800/600']
  },
  {
    id: '4',
    title: 'Emerald Valley Villa',
    price: '₹15.0 Cr',
    location: 'Lonavala, Maharashtra',
    beds: 6,
    baths: 7,
    sqft: 6000,
    type: 'Estate',
    featured: true,
    image: 'https://picsum.photos/id/1037/800/600',
    description: 'A sprawling estate nestled in the valleys of Lonavala. Perfect for weekend getaways or a serene retirement. Comes with a private orchard and heated pool.',
    features: ['Mountain View', 'Private Orchard', 'Heated Pool', 'Guest House'],
    images: ['https://picsum.photos/id/1037/800/600', 'https://picsum.photos/id/1031/800/600', 'https://picsum.photos/id/1026/800/600']
  },
  {
    id: '5',
    title: 'The Azure',
    price: '₹6.8 Cr',
    location: 'Worli, Mumbai',
    beds: 3,
    baths: 3,
    sqft: 2200,
    type: 'Apartment',
    featured: false,
    image: 'https://picsum.photos/id/1036/800/600',
    description: 'Sea-facing luxury apartment in the most coveted zip code of Mumbai. Amenities include a rooftop infinity pool and a world-class fitness center.',
    features: ['Sea Facing', 'Infinity Pool', 'Valet Parking', 'Business Center'],
    images: ['https://picsum.photos/id/1036/800/600', 'https://picsum.photos/id/1030/800/600', 'https://picsum.photos/id/1025/800/600']
  },
  {
    id: '6',
    title: 'Golden Meadows',
    price: '₹3.5 Cr',
    location: 'Goa',
    beds: 3,
    baths: 4,
    sqft: 2800,
    type: 'Villa',
    featured: false,
    image: 'https://picsum.photos/id/1035/800/600',
    description: 'Portuguese-style villa restored to modern standards. Walking distance from the beach with a lush tropical garden.',
    features: ['Garden', 'Heritage Style', 'Near Beach', 'Furnished'],
    images: ['https://picsum.photos/id/1035/800/600', 'https://picsum.photos/id/1029/800/600', 'https://picsum.photos/id/1024/800/600']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav Mehta',
    role: 'CEO, TechFlow',
    content: 'Brick Aura found us a home that wasn’t just a building, but a statement. The level of service was impeccable.',
    image: 'https://picsum.photos/id/1005/200/200'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Interior Designer',
    content: 'As a designer, I am picky. Brick Aura understood my aesthetic immediately and showed me properties that were breathtaking.',
    image: 'https://picsum.photos/id/1011/200/200'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    role: 'Investor',
    content: 'Professional, transparent, and exclusive. They have access to listings no one else does.',
    image: 'https://picsum.photos/id/1012/200/200'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Rohan Oberoi',
    role: 'Senior Estate Manager',
    image: 'https://picsum.photos/id/1006/400/500',
    phone: '+91 98765 43210',
    email: 'rohan@brickaura.com'
  },
  {
    id: '2',
    name: 'Sanya Kapoor',
    role: 'Luxury Consultant',
    image: 'https://picsum.photos/id/1009/400/500',
    phone: '+91 98123 45678',
    email: 'sanya@brickaura.com'
  }
];