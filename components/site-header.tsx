import { Container } from "@/components/container"
import { mailto, site } from "@/lib/site"

const navLink =
  "text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"

const mailLink =
  "text-sm underline decoration-primary underline-offset-[5px] transition-colors hover:text-primary focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background">
      <Container className="flex flex-col gap-3 py-4 sm:flex-row sm:items-baseline sm:justify-between">
        <a
          href="#top"
          className={`${navLink} font-heading text-lg text-foreground`}
        >
          {site.name}
        </a>
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <nav aria-label="页内" className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#work" className={navLink}>
              作品
            </a>
            <a href="#pricing" className={navLink}>
              价格
            </a>
            <a href="#contact" className={navLink}>
              联系
            </a>
          </nav>
          <a href={mailto} className={mailLink}>
            {site.email}
          </a>
        </div>
      </Container>
    </header>
  )
}
