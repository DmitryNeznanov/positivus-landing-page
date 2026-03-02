import Image from "next/image"
import Link from "next/link"

export default function Team() {
  return (
    <section
      className="pb-[50px] 2xl:pb-[100px] px-[10px]"
      id="team">
      <div className="wrapper">
        <article className="justify-center flex flex-col md:items-center md:justify-center md:flex-row lg:justify-normal gap-[20px] md:gap-[40px]">
          <span className="span-accent">
            <h2 className="heading-3xl">Team</h2>
          </span>
          <p className="max-w-[473px]">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </article>
        <section className="mt-[40px] 2xl:mt-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[20px] lg:gap-[40px]">
            {[
              [
                "John Smith",
                "CEO and Founder",
                "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
              ],
              [
                "Jane Doe",
                "Director of Operations",
                "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
              ],
              [
                "Michael Brown",
                "Senior SEO Specialist",
                "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
              ],
              [
                "Emily Johnson",
                "PPC Manager",
                "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
              ],
              [
                "Brian Williams",
                "Social Media Specialist",
                "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
              ],
              [
                "Sarah Kim",
                "Content Creator",
                "2+ years of experience in content creation and copywriting. Skilled in storytelling and brand messaging",
              ],
            ].map(([name, job, text], i) => {
              return (
                <article
                  className="h-full max-w-[387px] px-[25px] py-[30px] lg:px-[35px] lg:py-[40px] bg-background rounded-lg shadow-xl border border-foreground"
                  key={i}>
                  <div className="flex flex-col gap-y-[28px]">
                    <div className="flex flex-row">
                      <div>
                        <Image
                          src={`/team-${i + 1}.png`}
                          width={105}
                          height={102}
                          alt={`team-${i + 1}`}></Image>
                      </div>
                      <div className="ml-[10px] lg:ml-[20px] flex flex-col self-end">
                        <h4 className="heading-xl">{name}</h4>
                        <p className="text-foreground">{job}</p>
                      </div>
                      <div className="">
                        <Link
                          className="cursor-pointer"
                          href="https://linkedin.com"
                          target="_blank">
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle
                              cx="17"
                              cy="17"
                              r="17"
                              fill="black"
                            />
                            <path
                              d="M9.31776 25H12.8131V13.6844H9.31776V25Z"
                              fill="#B9FF66"
                            />
                            <path
                              d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
                              fill="#B9FF66"
                            />
                            <path
                              d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
                              fill="#B9FF66"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <hr className="w-full h-[2px] bg-foreground" />
                    <p>{text}</p>
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
