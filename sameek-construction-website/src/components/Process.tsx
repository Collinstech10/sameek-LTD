import { motion } from 'framer-motion'
import { processSteps } from '../data/process'

export default function Process() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-xs tracking-[0.2em] text-concrete">How We Work</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Our process
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 divide-y divide-charcoal/10 md:grid-cols-3 md:divide-y-0">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (i % 3) * 0.08 }}
              className="border-charcoal/10 py-8 md:border-t md:py-10 md:pr-8 md:[&:nth-child(3n+2)]:border-l md:[&:nth-child(3n+2)]:pl-8 md:[&:nth-child(3n+3)]:border-l md:[&:nth-child(3n+3)]:pl-8"
            >
              <span className="font-display text-2xl text-gold">{step.number}</span>
              <h3 className="mt-3 font-display text-2xl text-charcoal">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-charcoal/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
