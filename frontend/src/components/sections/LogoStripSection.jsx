const logos = [
  'Microsoft',
  'Google Cloud',
  'AWS',
  'Cisco',
  'Fortinet',
  'HP',
  'Dell',
  'Cloudflare',
  'Palo Alto Networks',
  'VMware',
]

export default function LogoStripSection() {
  return (
    <section className="py-12 bg-surface border-t border-b border-border">
      <p className="text-center text-text-muted text-sm mb-8">
        Trusted by teams at
      </p>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="overflow-hidden group">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="text-lg font-semibold tracking-tight text-text-muted opacity-60 hover:opacity-100 hover:text-text-primary transition-opacity duration-200 whitespace-nowrap px-8"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
