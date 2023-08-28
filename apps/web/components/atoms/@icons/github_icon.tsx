import Icon from '@web/public/vectors/github_line.svg'

type Props = {
  className?: string
  size?: number
}

export default function GithubIcon({ className, size = 24 }: Props) {
  return (
    <Icon className={className} width={size} height={size} alt="github icon" />
  )
}
