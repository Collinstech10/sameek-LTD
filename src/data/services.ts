export interface Service {
  number: string
  name: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    number: '01',
    name: 'Building Construction',
    description:
      'End-to-end construction of residential and commercial buildings, built to specification and delivered on schedule.',
    image:
      'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '02',
    name: 'Architectural Design',
    description:
      'Design solutions that balance form and function, translating client vision into buildable, structurally sound plans.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '03',
    name: 'Structural Works',
    description:
      'Foundations, framing, and load-bearing systems engineered for durability, safety, and long-term structural integrity.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '04',
    name: 'Renovation & Remodeling',
    description:
      'Upgrading and reconfiguring existing structures, from interior remodels to full-scale property renovations.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '05',
    name: 'Project Management',
    description:
      'Coordinated oversight of budget, timeline, and site operations, keeping every phase of a build on track.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '06',
    name: 'Property Development',
    description:
      'Turning land into finished developments, managing planning, construction, and delivery under one roof.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '07',
    name: 'Civil Construction',
    description:
      'Infrastructure and civil works built to withstand demanding conditions and serve communities for the long term.',
    image:
      'https://images.unsplash.com/photo-1590644365607-1c5a5b3b44c9?auto=format&fit=crop&w=1200&q=80',
  },
]
