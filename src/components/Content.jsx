export default function Content() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#121417] px-6 py-8 text-white sm:px-10 md:px-12 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,#171A1F_0%,#24262D_48%,#0E1013_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <Section1 />
        <Section2 />
      </div>
    </div>
  )
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <h1 className="text-[18vw] font-semibold leading-[0.75] tracking-tight text-white md:text-[14vw]">
        codevio
      </h1>
      <p className="pb-2 text-sm uppercase tracking-[0.24em] text-white/45">
        ©copyright
      </p>
    </div>
  )
}

const Nav = () => {
  return (
    <div className="flex flex-wrap gap-12 text-sm sm:gap-20">
      <div className="flex min-w-32 flex-col gap-3">
        <h3 className="mb-3 text-xs uppercase tracking-[0.28em] text-white/35">
          About
        </h3>
        <p className="text-white/80 transition-colors hover:text-white">Home</p>
        <p className="text-white/80 transition-colors hover:text-white">Projects</p>
        <p className="text-white/80 transition-colors hover:text-white">Our Mission</p>
        <p className="text-white/80 transition-colors hover:text-white">Contact Us</p>
      </div>

      <div className="flex min-w-32 flex-col gap-3">
        <h3 className="mb-3 text-xs uppercase tracking-[0.28em] text-white/35">
          Education
        </h3>
        <p className="text-white/80 transition-colors hover:text-white">News</p>
        <p className="text-white/80 transition-colors hover:text-white">Learn</p>
        <p className="text-white/80 transition-colors hover:text-white">Certification</p>
        <p className="text-white/80 transition-colors hover:text-white">Publications</p>
      </div>
    </div>
  )
}