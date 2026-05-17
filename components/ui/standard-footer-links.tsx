import Link from "next/link";

type FooterLink = { label: string; href: string };
type FooterGroup = { title: string; links: FooterLink[] };

const footerGroups: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Mission & Vision", href: "/mission-vision" },
      { label: "Careers / Vacancies", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Products",
    links: [
      { label: "PriorityPlanR", href: "/products/priorityplanr" },
      { label: "Mithaq", href: "/products/mithaq" },
      { label: "First Line AI", href: "/products/first-line-ai" },
      { label: "Delicious Fitness", href: "/products/delicious-fitness" },
      { label: "Smart NFC", href: "/products/smart-nfc" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help-center" },
      { label: "Documentation", href: "/docs" },
      { label: "API", href: "/api" },
      { label: "Support", href: "/support" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Data Processing Agreement", href: "/dpa" },
      { label: "Security", href: "/security" }
    ]
  },
  {
    title: "Social",
    links: [
      { label: "LinkedIn", href: "/social/linkedin" },
      { label: "Instagram", href: "/social/instagram" },
      { label: "YouTube", href: "/social/youtube" },
      { label: "X", href: "/social/x" }
    ]
  }
];

export function StandardFooterLinks() {
  return (
    <section aria-labelledby="footer-links-title" className="bg-[#6B7280] px-6 py-14 text-white md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-y border-white/10 py-10 lg:grid-cols-[1fr_2.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#C8A96B]">SaaSolutions</p>
            <h2 id="footer-links-title" className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              Practical software for international markets.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
              SaaSolutions builds and operates practical software products for businesses, governments, and international markets.
            </p>
          </div>

          <nav aria-label="Footer links" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white/42">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="inline-flex text-sm font-medium text-white/85 transition hover:translate-x-0.5 hover:text-[#FFF100] focus:outline-none focus:ring-2 focus:ring-[#FFF100] focus:ring-offset-2 focus:ring-offset-[#6B7280]"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
