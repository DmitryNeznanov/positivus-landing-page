import Image from "next/image"
import Link from "next/link"

export default function MobileMenu({
  isOpen,
  toggleMobileMenu,
}: {
  isOpen: boolean
  toggleMobileMenu: () => void
}) {
  const handleNavClick: React.MouseEventHandler<HTMLElement> = (e) => {
    const target = e.target as HTMLElement
    if (target.closest("a")) toggleMobileMenu()
  }

  return (
    <div
      className={`bg-accent lg:hidden overflow-hidden fixed top-0 left-0 z-50 w-[0%] h-full transition-[width] duration-300 ${
        isOpen ? "w-full" : "w-[0%] pointer-events-none"
      }`}>
      <div
        className="wrapper header-wrapper h-full flex flex-col"
        onClick={handleNavClick}>
        <div className="flex flex-row justify-between">
          <Link
            className="shrink-0"
            href="/">
            <Image
              src="/logo.svg"
              width={220}
              height={36}
              alt="logo"></Image>
          </Link>
          <button
            className="cursor-pointer p-[8px] box-content"
            onClick={toggleMobileMenu}>
            <Image
              className="shrink-0"
              src="/cross.svg"
              width={24}
              height={24}
              alt="close"
            />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
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
      </div>
    </div>
  )
}
