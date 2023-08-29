import classNames from 'classnames'

type Component = 'button' | 'a' | 'div' | 'span'

type Target = '_self' | '_blank' | '_parent' | '_top'

type AnchorProps = {
  children: React.ReactNode
  component: 'a'
  href: string
  target?: Target
  ghost?: boolean
}

type DefaultProps = {
  children: React.ReactNode
  component?: Exclude<Component, 'a'>
  ghost?: boolean
}

type Props = AnchorProps | DefaultProps

export default function Button({
  children,
  component = 'button',
  ghost = false,
  ...reset
}: Props) {
  const ComponentTag = component

  return (
    <ComponentTag
      className={classNames(
        'flex items-center justify-center gap-x-2',
        ghost
          ? 'border-3 border-black text-black p-2 transition-border duration-400 hover:border-first'
          : 'bg-black py-[1.1rem] px-6 text-white font-medium transition-background-color duration-400 hover:bg-first'
      )}
      {...reset}
    >
      {children}
    </ComponentTag>
  )
}
