type Props = {
  onPressed: () => void
  icon: React.ReactNode
  padding?: number
  id?: string
  className?: string
  onMousedOver?: () => void
  onMousedOut?: () => void
}

export default function IconButton({
  onPressed,
  icon,
  padding,
  id,
  className,
  onMousedOver,
  onMousedOut,
}: Props) {
  return (
    <button
      id={id}
      className={className}
      onClick={onPressed}
      onMouseOver={onMousedOver}
      onMouseOut={onMousedOut}
    >
      {icon}
    </button>
  )
}
