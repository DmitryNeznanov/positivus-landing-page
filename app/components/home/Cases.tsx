import Link from "next/link"
import React from "react"

export default function Cases() {
  return (
    <section
      className="pb-[70px] 2xl:pb-[140px] px-[10px]"
      id="cases">
      <div className="wrapper">
        <article className="justify-center flex flex-col md:items-center md:justify-center md:flex-row lg:justify-normal gap-[20px] md:gap-[40px]">
          <span className="span-accent">
            <h2 className="heading-3xl">Case Studies</h2>
          </span>
          <p className="max-w-[530px]">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </article>
        <section className="mt-[40px] md:mt-[80px]">
          <div className="px-[30px] lg:px-[60px] py-[35px] lg:py-[70px] flex w-max lg:w-auto mx-auto flex-col lg:flex-row items-center justify-between bg-foreground rounded-lg">
            {[
              [
                "For a local restaurant",
                "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
              ],
              [
                "For a B2B software company",
                "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
              ],
              [
                "For a national retail chain",
                "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
              ],
            ].map(([title, text], i, arr) => {
              return (
                <React.Fragment key={i}>
                  <article className="max-w-[220px] md:max-w-[286px] flex flex-col justify-between">
                    <h3 className="sr-only">{title}</h3>
                    <p className="text-background">{text}</p>
                    <Link
                      className="link w-max mt-[20px] flex flex-row gap-[15px] text-accent text-xl md:text-2xl"
                      href="#contact">
                      Learn more
                      <svg
                        className="mt-[5px]"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className="fill-accent"
                          d="M0.75 13.6956C0.0325611 14.1098 -0.213252 15.0272 0.200962 15.7446C0.615175 16.4621 1.53256 16.7079 2.25 16.2937L0.75 13.6956ZM20.2694 5.38286C20.4838 4.58266 20.0089 3.76015 19.2087 3.54574L6.16874 0.051683C5.36854 -0.16273 4.54603 0.312144 4.33162 1.11234C4.11721 1.91254 4.59208 2.73505 5.39228 2.94946L16.9834 6.05529L13.8776 17.6464C13.6631 18.4466 14.138 19.2691 14.9382 19.4835C15.7384 19.6979 16.5609 19.2231 16.7753 18.4229L20.2694 5.38286ZM2.25 16.2937L19.5705 6.29367L18.0705 3.69559L0.75 13.6956L2.25 16.2937Z"
                          fill="none"
                        />
                      </svg>
                    </Link>
                  </article>

                  {i < arr.length - 1 && (
                    <>
                      {/* TODO: write in hr? */}
                      <div className="max-w-[220px] md:max-w-[286px] lg:hidden w-full h-[1px]  bg-background my-[15px]" />
                      <div className="hidden lg:block w-[1px] self-stretch bg-background mx-[15px]" />
                    </>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </section>
      </div>
    </section>
  )
}
