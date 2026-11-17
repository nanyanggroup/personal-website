import { Container } from "@/components/container"
import { mailto, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-wrap items-baseline justify-between gap-3 py-8 text-sm text-muted-foreground">
        <p>{site.name}</p>
        <a
          href={mailto}
          className="underline decoration-primary underline-offset-[5px] transition-colors hover:text-primary focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
        >
          {site.email}
        </a>
      </Container>
    </footer>
  )
}
