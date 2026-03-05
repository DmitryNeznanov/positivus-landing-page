import Image from "next/image"

export default function Contact() {
  return (
    <section
      className="pb-[70px] 2xl:pb-[140px]"
      id="contact">
      <div className="wrapper px-[10px]">
        <article className="justify-center flex flex-col md:items-center md:justify-center md:flex-row lg:justify-normal gap-[20px] md:gap-[40px]">
          <span className="span-accent">
            <h2 className="heading-3xl ">Contact Us</h2>
          </span>
          <p className="max-w-[293px]">
            Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
          </p>
        </article>
        <section className="w-full mt-[40px] 2xl:mt-[80px] p-[35px] md:pt-[60px] md:pb-[80px] md:pl-[100px] flex flex-row items-center justify-between bg-grey rounded-lg">
          <form
            className="w-full md:max-w-[400px] lg:max-w-[556px]"
            action="#">
            <div className="flex flex-row gap-x-[35px]">
              <label className="text-md cursor-pointer">
                <input
                  className="accent-accent"
                  type="radio"
                  name="message"></input>
                <span className="ml-[14px]">Say Hi</span>
              </label>
              <label className="text-md cursor-pointer">
                <input
                  className="accent-accent"
                  type="radio"
                  name="message"></input>
                <span className="ml-[14px]">Get a Quote</span>
              </label>
            </div>
            <div className="mt-[40px] flex flex-col gap-y-[25px]">
              <label className="flex flex-col gap-y-[5px]">
                <span className="w-max cursor-pointer">Name</span>
                <input
                  className="input-background w-full"
                  placeholder="Name"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-y-[5px]">
                <span className="w-max cursor-pointer">Email*</span>
                <input
                  className="input-background w-full"
                  placeholder="Email"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-y-[5px]">
                <span className="w-max cursor-pointer">Message*</span>
                <textarea
                  className="input-background resize-none"
                  rows={6}
                  placeholder="Message"></textarea>
              </label>
            </div>
            <button className="w-full mt-[40px] button-foreground">
              Send Message
            </button>
          </form>
          <div>
            <Image
              className="w-max hidden md:block ml-[15px]"
              src="/form.svg"
              width={447}
              height={646}
              alt="form"></Image>
          </div>
        </section>
      </div>
    </section>
  )
}
