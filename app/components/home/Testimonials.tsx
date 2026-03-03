"use client"

import { useRef, useState } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "''We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.''",
      name: "John Smith",
      job: "CEO and Founder",
    },
    {
      quote:
        "''We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.''",
      name: "Jane Doe",
      job: "Director of Operations",
    },
    {
      quote:
        "''We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.''",
      name: "Michael Brown",
      job: "Senior SEO Specialist",
    },
    {
      quote:
        "''We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.''",
      name: "John Smith",
      job: "CEO and Founder",
    },
    {
      quote:
        "''We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.''",
      name: "Jane Doe",
      job: "Director of Operations",
    },
    {
      quote:
        "''We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.''",
      name: "Michael Brown",
      job: "Senior SEO Specialist",
    },
    {
      quote:
        "''We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.''",
      name: "John Smith",
      job: "CEO and Founder",
    },
  ]
  const total = testimonials.length
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(Math.floor(total / 2))

  function handlePrev() {
    if (!(index === 0)) {
      setIndex(index - 1)
    } else {
      setIndex(total - 1)
    }
  }
  function handleNext() {
    if (!(index === total - 1)) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }
  function changeIndex(index: number) {
    setIndex(index)
  }
  function handleScroll() {
    const container = containerRef.current!

    const slideWidth = container.offsetWidth
    const index = Math.round(container.scrollLeft / slideWidth)

    setIndex(index)
  }

  return (
    <section
      className="pb-[70px] 2xl:pb-[140px] px-[10px]"
      id="testimonials">
      <div className="wrapper">
        <article className="justify-center flex flex-col md:items-center md:justify-center md:flex-row lg:justify-normal gap-[20px] md:gap-[40px]">
          <span className="span-accent">
            <h2 className="heading-3xl">Testimonials</h2>
          </span>
          <p className="max-w-[473px]">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </article>
      </div>

      <section className="mt-[40px] 2xl:mt-[80px] ">
        <div className="wrapper">
          <div className="py-[20px] md:pt-[84px] md:pb-[68px] bg-foreground rounded-lg overflow-hidden">
            <div
              className="max-md:overflow-x-scroll max-md:snap-x max-md:snap-mandatory scrollbar-hidden"
              ref={containerRef}
              onScroll={handleScroll}>
              <div
                className="flex transition-transform duration-500 ease-out md:[--slide-size:50%] md:[--offset:25%] "
                style={{
                  transform: `translateX(calc(var(--offset) - ${index} * var(--slide-size)))`,
                }}>
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="shrink-0 basis-full snap-center px-[20px] md:basis-1/2 ">
                    <blockquote
                      className="arrow  p-[50px] bg-foreground border border-accent rounded-lg"
                      cite="https://google.com">
                      <p className="text-background">{item.quote}</p>
                    </blockquote>
                    <h4 className="ml-[13%] mt-[48px] flex flex-col heading-xl text-accent">
                      {item.name}
                      <cite className="text-base text-background font-normal not-italic">
                        {item.job}
                      </cite>
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[50px] md:mt-[80px] lg:mt-[124px] flex flex-row items-center justify-center gap-x-[19px]">
              <button
                className="hidden md:block cursor-pointer"
                onClick={handlePrev}>
                <svg
                  className="rotate-180"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.5 9.5459C0.671573 9.5459 1.44847e-07 10.2175 0 11.0459C-1.44847e-07 11.8743 0.671573 12.5459 1.5 12.5459L1.5 9.5459ZM22.5607 12.1066C23.1464 11.5208 23.1464 10.571 22.5607 9.98524L13.0147 0.439299C12.4289 -0.146488 11.4792 -0.146488 10.8934 0.439298C10.3076 1.02509 10.3076 1.97483 10.8934 2.56062L19.3787 11.0459L10.8934 19.5312C10.3076 20.117 10.3076 21.0667 10.8934 21.6525C11.4792 22.2383 12.4289 22.2383 13.0147 21.6525L22.5607 12.1066ZM1.5 12.5459L21.5 12.5459L21.5 9.5459L1.5 9.5459L1.5 12.5459Z"
                    fill="white"
                  />
                </svg>
              </button>

              {testimonials.map((_, i) => (
                <button
                  className="cursor-pointer pointer-events-none md:pointer-events-auto"
                  key={i}
                  onClick={() => changeIndex(i)}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                      fill={index === i ? "#B9FF66" : "white"}
                    />
                  </svg>
                </button>
              ))}

              <button
                className="hidden md:block cursor-pointer"
                onClick={handleNext}
                aria-label="Next testimonial">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.5 9.5459C0.671573 9.5459 1.44847e-07 10.2175 0 11.0459C-1.44847e-07 11.8743 0.671573 12.5459 1.5 12.5459L1.5 9.5459ZM22.5607 12.1066C23.1464 11.5208 23.1464 10.571 22.5607 9.98524L13.0147 0.439299C12.4289 -0.146488 11.4792 -0.146488 10.8934 0.439298C10.3076 1.02509 10.3076 1.97483 10.8934 2.56062L19.3787 11.0459L10.8934 19.5312C10.3076 20.117 10.3076 21.0667 10.8934 21.6525C11.4792 22.2383 12.4289 22.2383 13.0147 21.6525L22.5607 12.1066ZM1.5 12.5459L21.5 12.5459L21.5 9.5459L1.5 9.5459L1.5 12.5459Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
