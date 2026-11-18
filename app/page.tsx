import { Container } from "@/components/container"
import { Photo } from "@/components/photo"
import { mailto, site } from "@/lib/site"

export default function Page() {
  return (
    <main>
      <section className="pt-16 pb-8 md:pt-28 md:pb-12">
        <Container>
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-sm text-muted-foreground">摄影师</p>
              <h1
                id="top"
                className="mt-4 scroll-mt-28 font-heading text-6xl leading-none font-normal sm:text-7xl"
              >
                {site.name}
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed">
                {site.statement}
              </p>
              <div className="mt-6 max-w-md space-y-4 leading-7 text-foreground/80">
                {site.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8">
                <a
                  href={mailto}
                  className="text-sm underline decoration-primary underline-offset-[5px] transition-colors hover:text-primary focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {site.email}
                </a>
              </p>
            </div>
            <div className="lg:col-span-7">
              <Photo
                photo={site.hero}
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <h2
            id="work"
            className="scroll-mt-28 font-heading text-3xl font-normal md:text-4xl"
          >
            作品
          </h2>
          {site.works.length === 0 ? (
            <p className="mt-8 text-muted-foreground">作品还在整理。</p>
          ) : (
            <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12">
              {site.works.map((photo) => (
                <li key={photo.src} className={`min-w-0 ${photo.span}`}>
                  <Photo
                    photo={photo}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-xl">
            <h2
              id="pricing"
              className="scroll-mt-28 font-heading text-3xl font-normal md:text-4xl"
            >
              价格
            </h2>
            <p className="mt-6 leading-7 text-foreground/80">
              {site.pricingNote}
            </p>
          </div>
          <ul className="mt-12 border-t border-border">
            {site.pricing.map((item) => (
              <li
                key={item.name}
                className="grid gap-3 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <h3 className="font-heading text-2xl font-normal md:col-span-4">
                  {item.name}
                </h3>
                <p className="font-heading text-xl md:col-span-3">
                  {item.price}
                </p>
                <p className="leading-7 text-muted-foreground md:col-span-5">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pt-12 pb-24 md:pt-16 md:pb-36">
        <Container>
          <h2
            id="contact"
            className="scroll-mt-28 font-heading text-3xl font-normal md:text-4xl"
          >
            联系
          </h2>
          <p className="mt-6 max-w-md leading-7 text-foreground/80">
            {site.contactNote}
          </p>
          <p className="mt-8">
            <a
              href={mailto}
              className="font-heading text-3xl underline decoration-primary underline-offset-8 transition-colors hover:text-primary focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none md:text-4xl"
            >
              {site.email}
            </a>
          </p>
        </Container>
      </section>
    </main>
  )
}
