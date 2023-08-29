import Image from 'next/image'

type Props = {
  top?: number
  right?: number
  left?: number
  bottom?: number
  priority?: boolean
}

export default function Line({
  top,
  right,
  left,
  bottom,
  priority = false,
}: Props) {
  return (
    <Image
      style={{
        top: `${top}rem`,
        right: `${right}rem`,
        left: `${left}rem`,
        bottom: `${bottom}rem`,
      }}
      className="absolute -right-8 -bottom-2 invert w-[50px] transition-filter duration-400"
      src="/vectors/random_lines.svg"
      alt="random lines"
      width={53}
      height={81}
      priority={priority}
    />
  )
}
