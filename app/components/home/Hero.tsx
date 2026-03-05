import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    // Hero Section
    <section
      className="pt-[35px] pb-[70px] 2xl:pt-[70px] 2xl:pb-[140px] px-[10px]"
      id="hero">
      <div className="wrapper">
        <section className="mx-auto flex flex-col items-center gap-y-[35px] lg:flex-row lg:items-start lg:justify-between lg:gap-y-0">
          <article className="max-w-[531px] flex flex-col gap-y-[25px] lg:gap-y-[35px]">
            <h1 className="heading-4xl">
              Navigating the digital landscape for success
            </h1>
            <p className="text-xl xl:text-2xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Link
              className="button-foreground"
              href="#contact">
              Book a consultation
            </Link>
          </article>
          <div className="max-w-[450px] xl:max-w-[600px]">
            <Image
              src="/hero.svg"
              width={600}
              height={500}
              alt="Hero Image"></Image>
          </div>
        </section>
        {/* Sponsors Section */}
        <section className="pt-[35px] xl:pt-[70px]">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-none 2xl:grid-flow-col items-center justify-center 2xl:justify-between gap-[15px]">
            {(
              [
                ["amazon", 124, 48],
                ["dribble", 126, 48],
                ["hubspot", 128, 48],
                ["netflix", 145, 48],
                ["notion", 125, 48],
                ["zoom", 110, 48],
              ] as [string, number, number][]
            ).map(([link, width, height], i) => {
              return (
                <li
                  className="w-max mx-auto"
                  key={i}>
                  <Link
                    href={`https://${link}.com`}
                    target="_blank">
                    <Image
                      src={`/${link}.svg`}
                      width={width}
                      height={height}
                      alt={link}
                      preload={true}></Image>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </section>
  )
}
