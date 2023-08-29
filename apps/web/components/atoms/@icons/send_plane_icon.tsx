import Icon from '@web/public/vectors/send_plane_line.svg'

type Props = {
  className?: string
  size?: number
}

export default function SendPlaneIcon({ className, size = 24 }: Props) {
  return (
    <Icon
      className={className}
      width={size}
      height={size}
      alt="send plane icon"
    />
  )
}
