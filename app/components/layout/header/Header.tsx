"use client"
import { useState } from "react"
import HeaderWrapper from "./HeaderWrapper"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  function toggleMobileMenu() {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? "auto" : "hidden"
  }

  return (
    <HeaderWrapper
      isOpen={isOpen}
      toggleMobileMenu={toggleMobileMenu}
    />
  )
}
