'use client'

import useMenu from '@web/hooks/menu'

import IconButton from '../icon_button'
import { MenuIcon } from '../icons'

export default function ToggleButton() {
  const { openMenu } = useMenu()

  return (
    <IconButton
      onPressed={openMenu}
      icon={<MenuIcon size={20} className="text-white" />}
      id="nav-toggle"
      className="nav__toggle w-8 h-8 bg-black grid place-content-center"
    />
  )
}
