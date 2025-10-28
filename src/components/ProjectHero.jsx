const ProjectHero = () => {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-sm md:text-base text-gray-500 uppercase tracking-widest mb-6 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 md:mb-8">
            What I&apos;ve <span className="text-slate-400">Built</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
            Real work. Real problems. Real solutions I shipped.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero