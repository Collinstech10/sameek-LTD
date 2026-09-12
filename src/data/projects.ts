/**
 * PLACEHOLDER PROJECT DATA
 * -------------------------------------------------------------
 * These entries are illustrative placeholders only — they are
 * NOT real SAMEEK Design & Construction projects. They exist to
 * demonstrate the layout and should be replaced with verified
 * project names, locations, categories, and photography once
 * supplied by SAMEEK.
 *
 * To add a real project, add an object below with the same
 * shape and drop the image into `image` (a URL or a local
 * import from src/assets).
 * -------------------------------------------------------------
 */

export interface Project {
  id: string
  name: string
  location: string
  category: 'Residential' | 'Commercial' | 'Renovation' | 'Civil Works'
  image: string
  isPlaceholder: true
}

export const projects: Project[] = [
  {
    id: 'placeholder-01',
    name: 'Sample Residence',
    location: 'Abeokuta, Ogun State',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-02',
    name: 'Sample Office Complex',
    location: 'Lagos, Nigeria',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-03',
    name: 'Sample Interior Remodel',
    location: 'Ibara GRA, Abeokuta',
    category: 'Renovation',
    image:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1400&q=80',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-04',
    name: 'Sample Access Road Works',
    location: 'Ogun State',
    category: 'Civil Works',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80',
    isPlaceholder: true,
  },
]
