import Icon from '@web/public/vectors/close_line.svg'

type Props = {
  className?: string
  size?: number
}

export default function CloseIcon({ className, size = 24 }: Props) {
  return (
    <Icon className={className} width={size} height={size} alt="close icon" />
  )
}
