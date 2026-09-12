export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We meet to understand the site, the brief, and the outcome you need.',
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'Concepts and drawings are developed until the plan is right.',
  },
  {
    number: '03',
    title: 'Estimation',
    description: 'A clear scope and cost breakdown, before any ground is broken.',
  },
  {
    number: '04',
    title: 'Construction',
    description: 'Building proceeds under close supervision, on schedule.',
  },
  {
    number: '05',
    title: 'Quality Control',
    description: 'Every phase is inspected against specification before sign-off.',
  },
  {
    number: '06',
    title: 'Completion',
    description: 'A finished, handed-over structure built to last.',
  },
]

export interface Principle {
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    title: 'Quality',
    description: 'Materials and workmanship held to a standard that outlasts the build.',
  },
  {
    title: 'Precision',
    description: 'Accurate planning and execution, from the first drawing to the last detail.',
  },
  {
    title: 'Integrity',
    description: 'Honest costing and honest timelines, with no shortcuts taken quietly.',
  },
  {
    title: 'Safety',
    description: 'Site practices that protect every person working on a SAMEEK project.',
  },
  {
    title: 'Reliability',
    description: 'Commitments kept, from small renovations to full developments.',
  },
]
