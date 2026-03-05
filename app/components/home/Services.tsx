import Image from "next/image"
import Link from "next/link"

export default function Services() {
  return (
    <>
      {/* Services */}
      <section
        className="pb-[60px] 2xl:pb-[123px] px-[10px]"
        id="services">
        <div className="wrapper">
          <article className="justify-center flex flex-col md:items-center md:justify-center md:flex-row lg:justify-normal gap-[20px] md:gap-[40px]">
            <span className="span-accent">
              <h2 className="heading-3xl">Services</h2>
            </span>
            <p className="max-w-[580px]">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </article>
          <section className="mt-[40px] md:mt-[80px] mx-auto lg:w-auto lg:mx-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-[20px] lg:gap-[40px] lg:space-between">
              {/* article 1 */}
              <article className="w-full max-w-[600px] min-h-[230px] lg:min-h-[310px] p-[50px] flex flex-row justify-between rounded-lg border border-foreground bg-grey shadow-xl">
                <div className="flex flex-col justify-between">
                  <h3 className="heading-2xl">
                    <span className="span-accent">Search engine</span>
                    <br></br>
                    <span className="span-accent">optimization</span>
                  </h3>
                  <Link
                    className="w-max flex flex-row gap-[15px] items-center"
                    href="https://google.com">
                    <span className="block w-[41px] h-[41px] p-[12px] bg-foreground rounded-full flex items-center">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className="fill-background"
                          d="M0.75 13.6956C0.0325611 14.1098 -0.213252 15.0272 0.200962 15.7446C0.615175 16.4621 1.53256 16.7079 2.25 16.2937L0.75 13.6956ZM20.2694 5.38286C20.4838 4.58266 20.0089 3.76015 19.2087 3.54574L6.16874 0.051683C5.36854 -0.16273 4.54603 0.312144 4.33162 1.11234C4.11721 1.91254 4.59208 2.73505 5.39228 2.94946L16.9834 6.05529L13.8776 17.6464C13.6631 18.4466 14.138 19.2691 14.9382 19.4835C15.7384 19.6979 16.5609 19.2231 16.7753 18.4229L20.2694 5.38286ZM2.25 16.2937L19.5705 6.29367L18.0705 3.69559L0.75 13.6956L2.25 16.2937Z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span className="link text-xl md:text-2xl leading-md">
                      Learn more
                    </span>
                  </Link>
                </div>
                <div className="max-w-[50%] self-center">
                  <Image
                    className="hidden min-[425px]:block"
                    src="/service-1.png"
                    width={210}
                    height={166}
                    alt="service-1"></Image>
                </div>
              </article>
              {/* article 2 */}
              <article className="w-full max-w-[600px] min-h-[230px] lg:min-h-[310px] p-[50px] flex flex-row justify-between rounded-lg border border-foreground bg-accent shadow-xl">
                <div className="flex flex-col justify-between">
                  <h3 className="heading-2xl">
                    <span className="span-background">optimization</span>
                    <br></br>
                    <span className="span-background">advertising</span>
                  </h3>
                  <Link
                    className="w-max flex flex-row gap-[15px] items-center"
                    href="https://google.com">
                    <span className="block w-[41px] h-[41px] p-[12px] bg-foreground rounded-full flex items-center">
                      <svg
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
                    </span>
                    <span className="link text-xl md:text-2xl leading-md">
                      Learn more
                    </span>
                  </Link>
                </div>
                <div className="max-w-[50%] self-center">
                  <Image
                    className="hidden min-[425px]:block"
                    src="/service-2.png"
                    width={210}
                    height={147}
                    alt="service-2"></Image>
                </div>
              </article>
              {/* article 3 */}
              <article className="w-full max-w-[600px] min-h-[230px] lg:min-h-[310px] p-[50px] flex flex-row justify-between rounded-lg border border-foreground bg-foreground shadow-xl">
                <div className="flex flex-col justify-between">
                  <h3 className="heading-2xl">
                    <span className="span-background">Social Media</span>
                    <br></br>
                    <span className="span-background">Marketing</span>
                  </h3>
                  <Link
                    className="w-max flex flex-row gap-[15px] items-center"
                    href="https://google.com">
                    <span className="block w-[41px] h-[41px] p-[12px] bg-background rounded-full flex items-center">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className="fill-foreground"
                          d="M0.75 13.6956C0.0325611 14.1098 -0.213252 15.0272 0.200962 15.7446C0.615175 16.4621 1.53256 16.7079 2.25 16.2937L0.75 13.6956ZM20.2694 5.38286C20.4838 4.58266 20.0089 3.76015 19.2087 3.54574L6.16874 0.051683C5.36854 -0.16273 4.54603 0.312144 4.33162 1.11234C4.11721 1.91254 4.59208 2.73505 5.39228 2.94946L16.9834 6.05529L13.8776 17.6464C13.6631 18.4466 14.138 19.2691 14.9382 19.4835C15.7384 19.6979 16.5609 19.2231 16.7753 18.4229L20.2694 5.38286ZM2.25 16.2937L19.5705 6.29367L18.0705 3.69559L0.75 13.6956L2.25 16.2937Z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span className="link text-xl md:text-2xl leading-md text-background">
                      Learn more
                    </span>
                  </Link>
                </div>
                <div className="max-w-[50%] self-center">
                  <Image
                    className="hidden min-[425px]:block"
                    src="/service-3.png"
                    width={208}
                    height={210}
                    alt="service-3"></Image>
                </div>
              </article>
              {/* article 4 */}
              <article className="w-full max-w-[600px] min-h-[230px] lg:min-h-[310px] p-[50px] flex flex-row justify-between rounded-lg border border-foreground bg-grey shadow-xl">
                <div className="flex flex-col justify-between">
                  <h3 className="heading-2xl">
                    <span className="span-accent">Email</span>
                    <br></br>
                    <span className="span-accent">Marketing</span>
                  </h3>
                  <Link
                    className="w-max flex flex-row gap-[15px] items-center"
                    href="https://google.com">
                    <span className="block w-[41px] h-[41px] p-[12px] bg-foreground rounded-full flex items-center">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className="fill-background"
                          d="M0.75 13.6956C0.0325611 14.1098 -0.213252 15.0272 0.200962 15.7446C0.615175 16.4621 1.53256 16.7079 2.25 16.2937L0.75 13.6956ZM20.2694 5.38286C20.4838 4.58266 20.0089 3.76015 19.2087 3.54574L6.16874 0.051683C5.36854 -0.16273 4.54603 0.312144 4.33162 1.11234C4.11721 1.91254 4.59208 2.73505 5.39228 2.94946L16.9834 6.05529L13.8776 17.6464C13.6631 18.4466 14.138 19.2691 14.9382 19.4835C15.7384 19.6979 16.5609 19.2231 16.7753 18.4229L20.2694 5.38286ZM2.25 16.2937L19.5705 6.29367L18.0705 3.69559L0.75 13.6956L2.25 16.2937Z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span className="link text-xl md:text-2xl leading-md">
                      Learn more
                    </span>
                  </Link>
                </div>
                <div className="max-w-[50%] self-center">
                  <Image
                    className="hidden min-[425px]:block"
                    src="/service-4.png"
                    width={210}
                    height={192}
                    alt="service-4"></Image>
                </div>
              </article>
              {/* article 5 */}
              <article className="w-full max-w-[600px] min-h-[230px] lg:min-h-[310px] p-[50px] flex flex-row justify-between rounded-lg border border-foreground bg-accent shadow-xl">
                <div className="flex flex-col justify-between">
                  <h3 className="heading-2xl">
                    <span className="span-background">Content</span>
                    <br></br>
                    <span className="span-background">Creation</span>
                  </h3>
                  <Link
                    className="w-max flex flex-row gap-[15px] items-center"
                    href="https://google.com">
                    <span className="block w-[41px] h-[41px] p-[12px] bg-foreground rounded-full flex items-center">
                      <svg
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
                    </span>
                    <span className="link text-xl md:text-2xl leading-md">
                      Learn more
                    </span>
                  </Link>
                </div>
                <div className="max-w-[50%] self-center">
                  <Image
                    className="hidden min-[425px]:block"
                    src="/service-5.png"
                    width={210}
                    height={195}
                    alt="service-5"></Image>
                </div>
              </article>
              {/* article 6 */}
              <article className="w-full max-w-[600px] min-h-[230px] lg:min-h-[310px] p-[50px] flex flex-row justify-between rounded-lg border border-foreground bg-foreground shadow-xl">
                <div className="flex flex-col justify-between">
                  <h3 className="heading-2xl">
                    <span className="span-background">Analytics and</span>
                    <br></br>
                    <span className="span-background">Content</span>
                  </h3>
                  <Link
                    className="w-max flex flex-row gap-[15px] items-center"
                    href="https://google.com">
                    <span className="block w-[41px] h-[41px] p-[12px] bg-background rounded-full flex items-center">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className="fill-foreground"
                          d="M0.75 13.6956C0.0325611 14.1098 -0.213252 15.0272 0.200962 15.7446C0.615175 16.4621 1.53256 16.7079 2.25 16.2937L0.75 13.6956ZM20.2694 5.38286C20.4838 4.58266 20.0089 3.76015 19.2087 3.54574L6.16874 0.051683C5.36854 -0.16273 4.54603 0.312144 4.33162 1.11234C4.11721 1.91254 4.59208 2.73505 5.39228 2.94946L16.9834 6.05529L13.8776 17.6464C13.6631 18.4466 14.138 19.2691 14.9382 19.4835C15.7384 19.6979 16.5609 19.2231 16.7753 18.4229L20.2694 5.38286ZM2.25 16.2937L19.5705 6.29367L18.0705 3.69559L0.75 13.6956L2.25 16.2937Z"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span className="link text-xl md:text-2xl leading-md text-background">
                      Learn more
                    </span>
                  </Link>
                </div>
                <div className="max-w-[50%] self-center">
                  <Image
                    className="hidden min-[425px]:block"
                    src="/service-6.png"
                    width={210}
                    height={170}
                    alt="service-6"></Image>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>
      {/* CTA */}
      <section className="px-[10px] pb-[75px] 2xl:pb-[163px]">
        <div className="wrapper">
          <article className="w-full md:max-h-[347px] mx-auto p-[30px] md:p-[60px] flex flex-col items-center justify-center gap-y-[30px] md:gap-y-0 md:flex-row md:justify-between md:items-center bg-grey rounded-lg">
            <div className="max-w-[373px] lg:max-w-[473px] flex flex-col gap-[26px]">
              <h3 className="heading-2xl">Let’s make things happen</h3>
              <p>
                Contact us todaylink to learn more about how our digital
                marketing services can help your business grow and succeed
                online.
              </p>
              <Link
                className="button-foreground"
                href="#contact">
                Get your free proposal
              </Link>
            </div>
            <div>
              <Image
                className="hidden md:block md:h-[120%] lg:mr-[70px]"
                src="/cta.svg"
                width={359}
                height={394}
                alt="CTA"></Image>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
