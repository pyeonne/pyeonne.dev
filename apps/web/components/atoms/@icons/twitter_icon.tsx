import Icon from '@web/public/vectors/twitter_x_line.svg'

type Props = {
  className?: string
  size?: number
}

export default function TwitterIcon({ className, size = 24 }: Props) {
  return (
    <Icon className={className} width={size} height={size} alt="twitter icon" />
  )
}
