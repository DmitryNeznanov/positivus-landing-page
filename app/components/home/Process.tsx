"use client"
import Image from "next/image"
import { useState } from "react"

export default function Process() {
  const [index, setIndex] = useState(1)

  function setActive(i: number) {
    if (index === i) {
      setIndex(0)
    } else {
      setIndex(i)
    }
  }
  return (
    <section
      className="pb-[70px] 2xl:pb-[140px] px-[10px]"
      id="process">
      <div className="wrapper">
        <article className="justify-center flex flex-col md:items-center md:justify-center md:flex-row lg:justify-normal gap-[20px] md:gap-[40px]">
          <span className="span-accent">
            <h2 className="heading-3xl ">
              Our Working <span>Process</span>
            </h2>
          </span>
          <p className="max-w-[293px]">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </article>
        <section className="mt-[40px] 2xl:mt-[80px]">
          <div className="flex flex-col gap-[30px]">
            {[
              [
                "Consultation",
                "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
              ],
              [
                "Research and Strategy Development",
                "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
              ],
              [
                "Implementation",
                "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
              ],
              [
                "Monitoring and Optimization",
                "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
              ],
              [
                "Reporting and Communication",
                "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
              ],
              [
                "Continual Improvement",
                "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
              ],
            ].map(([title, text], i) => {
              return (
                <article
                  className={`px-[30px] py-[21px] lg:px-[60px] lg:py-[41px] rounded-lg shadow-xl border border-foreground cursor-pointer ${index === i + 1 ? "bg-accent" : "bg-grey"}`}
                  key={i}
                  onClick={() => {
                    setActive(i + 1)
                  }}>
                  <div className="flex flex-col">
                    <div className="flex items-row items-center justify-between">
                      <h3 className="text-[18px] heading-2xl flex flex-row items-center gap-[25px]">
                        <span className="heading-4xl">
                          {(1 + i).toString().padStart(2, "0")}
                        </span>
                        <span className="heading-2xl break-all md:break-normal">
                          {title}
                        </span>
                      </h3>
                      <button
                        className={`w-[58px] h-[58px] flex justify-center shrink-0 rounded-full border border-foreground  cursor-pointer ${index === i + 1 ? "bg-grey" : "bg-transparent"}`}>
                        <Image
                          className="block"
                          src={`/${index === i + 1 ? "minus" : "plus"}.svg`}
                          width={25}
                          height={25}
                          onClick={() => {
                            setActive(i + 1)
                          }}
                          alt="plus"></Image>
                      </button>
                    </div>
                    <div
                      className={`grid transition-all duration-300 overflow-hidden ${
                        index === i + 1
                          ? "mt-[15px] lg:mt-[30px] grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}>
                      <div className="overflow-hidden">
                        <hr className="w-full h-[2px] bg-foreground" />
                        <p className="mt-[15px] lg:mt-[30px]">{text}</p>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </section>
  )
}
