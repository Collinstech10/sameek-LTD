export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal py-14 text-paper/70">
      <div className="container-x">
        <div className="flex flex-col gap-10 border-b border-paper/10 pb-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-2xl text-white">SAMEEK</p>
            <p className="mt-1 text-xs tracking-[0.15em] text-paper/50">DESIGN &amp; CONSTRUCTION LIMITED</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/55">
              No. 1, Oba Karounwi Street, GRA, Ibara, Abeokuta, Ogun State, Nigeria
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a href="mailto:sameekconstruction@yahoo.com" className="text-sm hover:text-white">
            sameekconstruction@yahoo.com
          </a>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-paper/40 md:flex-row md:justify-between">
          <p>© {year} SAMEEK Design &amp; Construction Limited. RC 1509627.</p>
          <p>Private Company Limited by Shares, Ogun State, Nigeria</p>
        </div>
      </div>
    </footer>
  )
}
