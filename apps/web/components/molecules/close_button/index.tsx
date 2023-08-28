import IconButton from '@web/components/atoms/icon_button'
import useMenu from '@web/hooks/menu'

import { CloseIcon } from '../../atoms/@icons'

export default function CloseButton() {
  const { closeMenu } = useMenu()

  return (
    <IconButton
      onPressed={closeMenu}
      icon={<CloseIcon className="text-white" />}
      id="nav-close"
      className="nav__close flex justify-center absolute top-4 right-6 cursor-pointer"
    />
  )
}
