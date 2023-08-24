import useMenu from '@web/hooks/menu'

import { CloseIcon } from '../icons'

export default function CloseButton() {
  const { closeMenu } = useMenu()

  return (
    <div
      className="nav__close text-white flex justify-center absolute top-4 right-6 cursor-pointer"
      id="nav-close"
      onClick={closeMenu}
    >
      <CloseIcon />
    </div>
  )
}
