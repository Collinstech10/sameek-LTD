import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1590986895711-b52d0e3fed5b?auto=format&fit=crop&w=2400&q=80"
        alt="Modern building under construction, structural frame against the sky"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/25" />

      <div className="container-x relative z-10 w-full pb-16 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 text-xs tracking-[0.2em] text-white/70"
        >
          SAMEEK DESIGN &amp; CONSTRUCTION LIMITED
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="max-w-4xl font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Building excellence.
          <br />
          Creating lasting value.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mt-8 max-w-md text-base leading-relaxed text-white/80"
        >
          Professional construction and building solutions delivered with precision, quality, and integrity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="border border-white bg-white px-7 py-3.5 text-sm text-charcoal transition-colors hover:bg-transparent hover:text-white"
          >
            View Our Projects
          </a>
          <a
            href="#contact"
            className="border border-white/70 px-7 py-3.5 text-sm text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 md:right-10 md:flex lg:right-16"
      >
        <span className="text-[10px] tracking-[0.2em] text-white/60">SCROLL</span>
        <span className="h-12 w-px overflow-hidden bg-white/25">
          <motion.span
            className="block h-full w-full bg-white"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  )
}
