import { motion } from 'framer-motion'
import { ShieldCheck, Target, HeartHandshake, HardHat, BadgeCheck } from 'lucide-react'
import { principles } from '../data/process'

const icons = [BadgeCheck, Target, HeartHandshake, ShieldCheck, HardHat]

export default function WhySameek() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="text-xs tracking-[0.2em] text-concrete">Why Sameek</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Built with purpose.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((principle, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
                className="border-t border-charcoal/10 py-8 pr-6 lg:border-l lg:border-t-0 lg:py-2 lg:pl-8 lg:first:border-l-0"
              >
                <Icon size={26} strokeWidth={1.5} className="text-gold" />
                <h3 className="mt-5 font-display text-xl text-charcoal">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {principle.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
