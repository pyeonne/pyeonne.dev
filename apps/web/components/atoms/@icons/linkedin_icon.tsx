import Icon from '@web/public/vectors/linkedin_box_line.svg'

type Props = {
  className?: string
  size?: number
}

export default function LinkedinIcon({ className, size = 24 }: Props) {
  return (
    <Icon
      className={className}
      width={size}
      height={size}
      alt="linkedin icon"
    />
  )
}
