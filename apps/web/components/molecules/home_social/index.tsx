import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@web/components/atoms/@icons'

const items = [
  {
    href: '#',
    icon: <TwitterIcon size={20} />,
  },
  {
    href: '#',
    icon: <LinkedInIcon size={20} />,
  },
  {
    href: '#',
    icon: <GithubIcon size={20} />,
  },
]

export default function HomeSocial() {
  return (
    <div className="home__social h-max absolute -left-12 grid gap-y-4 my-auto top-0 bottom-0">
      {items.map(({ href, icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          className="home__social-link bg-black-light text-white grid place-content-center p-1.5 hover:bg-black transition-background-color duration-300"
        >
          {icon}
        </a>
      ))}
    </div>
  )
}
