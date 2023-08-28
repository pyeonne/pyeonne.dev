import Icon from '@web/public/vectors/menu_line.svg'

type Props = {
  className?: string
  size?: number
}

export default function MenuIcon({ className, size = 24 }: Props) {
  return (
    <Icon className={className} width={size} height={size} alt="menu icon" />
  )
}
