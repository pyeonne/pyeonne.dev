import classNames from 'classnames'

type Props = {
  top?: number
  right?: number
  left?: number
  bottom?: number
}

export default function GeometricBox({ top, right, left, bottom }: Props) {
  return (
    <div
      style={{
        top: `${top}rem`,
        right: `${right}rem`,
        left: `${left}rem`,
        bottom: `${bottom}rem`,
      }}
      className={classNames(
        'absolute w-5 h-5 bg-first -rotate-30 z-10',
        'after:content-[""] after:absolute after:w-4 after:h-4 after:border-3 after:border-black after:-left-[5px] after:-top-[5px]'
      )}
    />
  )
}
