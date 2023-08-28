'use client'

import useMenu from '@web/hooks/menu'

import { MenuIcon } from '../../atoms/@icons'
import IconButton from '../../atoms/icon_button'

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
