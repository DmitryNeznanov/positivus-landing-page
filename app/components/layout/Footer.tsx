import Link from "next/link"

export default function Footer() {
  return (
    <footer className="px-[10px]">
      <div className="wrapper">
        <section className="px-[60px] pt-[55px] pb-[50px] bg-foreground rounded-tl-lg rounded-tr-lg">
          <div className="flex flex-col items-center md:flex-row justify-between gap-[35px]">
            <address className="max-w-[332px] text-background not-italic">
              <span className="span-accent">
                <h3 className="heading-xl text-foreground">Contact us:</h3>
              </span>
              <div className="mt-[27px] flex flex-col gap-y-[20px]">
                <p>
                  Email:{" "}
                  <Link
                    className="link"
                    href="mailto:info@positivus.com"
                    target="_blank">
                    info@positivus.com
                  </Link>
                </p>
                <p>
                  Phone:{" "}
                  <Link
                    className="link"
                    href="tel:5555678901"
                    target="_blank">
                    555-567-8901
                  </Link>
                </p>
                <div className="flex flex-col">
                  <p>Address: 1234 Main St</p>
                  <p>Moonstone City, Stardust State 12345</p>
                </div>
              </div>
            </address>
            <form className="max-w-[650px] px-[40px] py-[60px] bg-[#292A32] rounded-lg">
              <div className="flex flex-col lg:flex-row gap-[20px]">
                <input
                  className="input-foreground md:max-w-[285px]"
                  placeholder="Email"
                  type="email"
                />
                <button className="button-accent ">Subscribe to news</button>
              </div>
            </form>
          </div>
          <hr className="my-[50px] w-full bg-background h-[2px]" />
          <div className="flex flex-col md:flex-row gap-x-[40px] text-background">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <Link
              className="link underline hover:no-underline"
              href="https://google.com">
              Privacy Police
            </Link>
          </div>
        </section>
      </div>
    </footer>
  )
}
