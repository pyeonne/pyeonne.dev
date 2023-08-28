import Icon from '@web/public/vectors/arrow_down_s_line.svg'

type Props = {
  className?: string
  size?: number
}

export default function ArrowDownIcon({ className, size = 24 }: Props) {
  return (
    <Icon
      className={className}
      width={size}
      height={size}
      alt="arrow down icon"
    />
  )
}
