import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function HeaderWrapper({
  isOpen,
  toggleMobileMenu,
}: {
  isOpen: boolean
  toggleMobileMenu: () => void
}) {
  return (
    <header>
      <MobileMenu
        isOpen={isOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div className="wrapper header-wrapper">
        <nav className="flex flex-row justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/logo.svg"
                width={220}
                height={36}
                alt="logo"></Image>
            </Link>
          </div>
          <div className="hidden lg:block">
            <nav className="flex flex-col lg:flex-row gap-[20px] xl:gap-[40px]">
              <ul className="flex flex-col lg:flex-row items-center gap-[20px] xl:gap-[40px]">
                {[
                  ["services", "services"],
                  ["use cases", "cases"],
                  ["team", "team"],
                  ["testimonials", "testimonials"],
                  ["contact us", "contact"],
                ].map(([title, link], i) => {
                  return (
                    <li
                      className="text-xl xl:text-2xl capitalize"
                      key={i}>
                      <Link href={`#${link}`}>{title}</Link>
                    </li>
                  )
                })}
              </ul>
              <Link
                className="button-transparent inline-block"
                href="#contact">
                Request a quote
              </Link>
            </nav>
          </div>
          <button
            className="cursor-pointer p-[8px] box-content lg:hidden"
            onClick={toggleMobileMenu}>
            <Image
              src="/menu.svg"
              width={24}
              height={24}
              alt="menu"></Image>
          </button>
        </nav>
      </div>
    </header>
  )
}
