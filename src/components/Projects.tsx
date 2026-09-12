import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="container-x py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <span className="text-xs tracking-[0.2em] text-concrete">Our Work</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            Selected projects
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-charcoal/60">
          A sample of the kind of work SAMEEK undertakes. Shown here as placeholders until project
          photography is supplied.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: (i % 2) * 0.1 }}
            className={i % 2 === 1 ? 'md:mt-20' : ''}
          >
            <div className="group relative aspect-[4/3] w-full overflow-hidden bg-charcoal/5">
              <img
                src={project.image}
                alt={`${project.name}, a placeholder ${project.category.toLowerCase()} project image`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 border border-white/40 bg-charcoal/40 px-3 py-1 text-[11px] tracking-wide text-white backdrop-blur-sm">
                Placeholder
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4 border-t border-charcoal/10 pt-4">
              <div>
                <h3 className="font-display text-2xl text-charcoal">{project.name}</h3>
                <p className="mt-1 text-sm text-concrete">{project.location}</p>
              </div>
              <span className="whitespace-nowrap text-xs tracking-[0.15em] text-gold">
                {project.category.toUpperCase()}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
