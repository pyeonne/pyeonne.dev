import Icon from '@web/public/vectors/instagram_line.svg'

type Props = {
  className?: string
  size?: number
}

export default function InstagramIcon({ className, size = 24 }: Props) {
  return (
    <Icon
      className={className}
      width={size}
      height={size}
      alt="instagram icon"
    />
  )
}
