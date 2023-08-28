'use client'

import Typography from '@web/components/atoms/typography'
import CloseButton from '@web/components/molecules/close_button'
import useMenu from '@web/hooks/menu'
import classNames from 'classnames'

const items = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About Me',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export default function NavMenu() {
  const { menu, closeMenu } = useMenu()

  return (
    <div
      className={classNames(
        menu ? 'top-0' : '-top-full',
        'nav__menu pt-[1.8rem] pb-20 fixed transition-top duration-400 dur left-0 backdrop-blur bg-black/75 text-center w-full'
      )}
      id="nav-menu"
    >
      <Typography
        role="TITLE_SMALL"
        component="span"
        color="var(--white-color)"
        fontWeight="SEMIBOLD"
        sx="nav__title mb-14"
      >
        Menu
      </Typography>
      <Typography
        role="HEADLINE_SMALL"
        component="h3"
        color="var(--white-color)"
        sx={classNames(
          'nav__name relative w-max mx-auto mb-12 font-player',
          'before:content-[""] before:w-10 before:h-[1px] before:bg-text-light before:absolute before:top-2/4 before:-left-16',
          'after:content-[""] after:w-10 after:h-[1px] after:bg-text-light after:absolute after:top-2/4 after:-right-16'
        )}
      >
        hana
      </Typography>

      <ul className="nav__list flex flex-col gap-y-10">
        {items.map(({ name, href }, index) => (
          <li key={name + index} className="nav__item">
            <a
              href={href}
              className={classNames(
                'nav__link relative text-text-light text-body-large font-semibold transition-color duration-300',
                'after:content-[""] after:w-0 after:h-0.5 after:bg-white after:absolute after:left-0 after:-bottom-2 after:transition-width after:duration-300',
                'hover:text-white hover:after:w-1/4'
              )}
              onClick={closeMenu}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>

      <CloseButton />
    </div>
  )
}
