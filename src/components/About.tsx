import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="container-x py-28 md:py-36">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="md:col-span-5 md:col-start-1"
        >
          <span className="text-xs tracking-[0.2em] text-concrete">About Sameek</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            We build more than structures.
          </h2>

          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-charcoal/75">
            <p>
              SAMEEK Design &amp; Construction Limited is a construction company based in Abeokuta,
              Ogun State, delivering building projects with a focus on quality, precision, and
              professionalism.
            </p>
            <p>
              Every project is approached with the same standard: sound planning, careful
              execution, and clear communication with the client from the first conversation to
              handover. Our work is guided by an understanding that a building is a long-term
              investment, and that the way it is constructed matters as much as how it looks.
            </p>
            <p>
              We work closely with clients to understand what they need, then bring the
              discipline of experienced builders to deliver it — on specification, and built to
              last.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="md:col-span-6 md:col-start-7"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1400&q=80"
              alt="Construction worker reviewing building plans on site"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
