import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-28 md:py-36">
      <div className="container-x grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="md:col-span-4"
        >
          <span className="text-xs tracking-[0.2em] text-concrete">Get In Touch</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Contact us
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <p className="font-display text-xl text-charcoal">
                SAMEEK Design &amp; Construction Limited
              </p>
            </div>

            <div className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <p className="text-sm leading-relaxed text-charcoal/70">
                No. 1, Oba Karounwi Street,
                <br />
                GRA, Ibara,
                <br />
                Abeokuta, Ogun State, Nigeria
              </p>
            </div>

            <div className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
              <a
                href="mailto:sameekconstruction@yahoo.com"
                className="text-sm text-charcoal/70 underline decoration-charcoal/20 underline-offset-4 transition-colors hover:text-charcoal hover:decoration-gold"
              >
                sameekconstruction@yahoo.com
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="md:col-span-7 md:col-start-6"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
