'use client'

import NavMenu from '@web/components/molecules/nav_menu'
import ToggleButton from '@web/components/molecules/toggle_button'
import useHeader from '@web/hooks/header'
import classNames from 'classnames'
import { useEffect } from 'react'

export default function Header() {
  const { shadowHeader, addShadowHeader, removeShadowHeader } = useHeader()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? addShadowHeader() : removeShadowHeader()
    })
  }, [addShadowHeader, removeShadowHeader])

  return (
    <header
      className={classNames(
        'header fixed w-full top-0 left-0 bg-body z-fixed transition-shadow duration-400',
        shadowHeader ? 'shadow-header' : ''
      )}
      id="header"
    >
      <nav className="nav container relative h-header flex justify-between items-center">
        <a
          href="#"
          className="nav__logo flex gap-x-2 items-center font-semibold text-title"
        >
          <span className="nav__logo-circle font-player w-8 h-8 bg-black grid place-content-center rounded-full text-white">
            h
          </span>
          <span className="nav__logo-name font-player">hana jeong.</span>
        </a>

        <NavMenu />

        <div className="nav__buttons">
          {/* Toggle button */}
          <ToggleButton />
        </div>
      </nav>
    </header>
  )
}
