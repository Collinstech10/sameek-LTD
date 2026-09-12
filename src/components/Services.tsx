import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'

export default function Services() {
  const [active, setActive] = useState<number | null>(null)
  const shown = active ?? 0

  return (
    <section id="services" className="bg-charcoal py-28 text-paper md:py-36">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="md:col-span-4"
          >
            <span className="text-xs tracking-[0.2em] text-paper/50">Our Capabilities</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl">What we do</h2>
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-paper/60">
              Seven areas of construction and development capability, covering a project from
              first drawing to finished building.
            </p>

            <div className="relative mt-10 hidden aspect-[4/5] w-full max-w-sm overflow-hidden md:block">
              {services.map((service, i) => (
                <img
                  key={service.number}
                  src={service.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out"
                  style={{ opacity: shown === i ? 1 : 0 }}
                  loading="lazy"
                />
              ))}
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>
          </motion.div>

          <div className="md:col-span-8">
            <ul>
              {services.map((service, i) => (
                <motion.li
                  key={service.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.04 }}
                  onMouseEnter={() => setActive(i)}
                  className="group border-b border-paper/15 first:border-t"
                >
                  <a href="#contact" className="flex items-center gap-6 py-7 md:gap-10 md:py-8">
                    <span className="font-display text-lg text-gold">{service.number}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl transition-colors group-hover:text-gold sm:text-3xl">
                        {service.name}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper/55">
                        {service.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="shrink-0 text-paper/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                      size={22}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
