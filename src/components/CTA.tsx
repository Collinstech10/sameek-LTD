import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden py-32">
      <img
        src="https://images.unsplash.com/photo-1590644976003-8b25b0b8f0a5?auto=format&fit=crop&w=2200&q=80"
        alt="Concrete structure and scaffolding of a building under construction"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/75" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="container-x relative z-10 max-w-2xl"
      >
        <h2 className="font-display text-4xl leading-[1.1] text-white sm:text-5xl">
          Let's build something exceptional.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/75">
          Have a construction project in mind? Let's discuss how we can bring it to life.
        </p>
        <a
          href="#contact"
          className="mt-9 inline-block border border-white bg-white px-8 py-3.5 text-sm text-charcoal transition-colors hover:bg-transparent hover:text-white"
        >
          Request a Quote
        </a>
      </motion.div>
    </section>
  )
}
