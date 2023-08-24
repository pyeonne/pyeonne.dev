import classnames from 'classnames'

type Role =
  | 'DISPLAY_LARGE'
  | 'DISPLAY_MEDIUM'
  | 'DISPLAY_SMALL'
  | 'HEADLINE_LARGE'
  | 'HEADLINE_MEDIUM'
  | 'HEADLINE_SMALL'
  | 'TITLE_LARGE'
  | 'TITLE_MEDIUM'
  | 'TITLE_SMALL'
  | 'LABEL_LARGE'
  | 'LABEL_MEDIUM'
  | 'LABEL_SMALL'
  | 'BODY_LARGE'
  | 'BODY_MEDIUM'
  | 'BODY_SMALL'

type Component = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Align = 'INHERIT' | 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFY'

type Display = 'initial' | 'block' | 'inline' | 'inline-block'

type FontWeight =
  | 'EXTRALIGHT'
  | 'LIGHT'
  | 'NORMAL'
  | 'MEDIUM'
  | 'SEMIBOLD'
  | 'BOLD'
  | 'EXTRABOLD'
  | 'BLACK'

type Props = {
  children: React.ReactNode
  role: Role
  component?: Component
  align?: Align
  color?: string
  display?: Display
  gutterBottom?: boolean
  noWrap?: boolean
  fontWeight?: FontWeight
  sx?: string
}

export default function Typography({
  children,
  role,
  component = 'p',
  align = 'INHERIT',
  color = 'text-text',
  display = 'block',
  gutterBottom = false,
  noWrap = false,
  fontWeight = 'NORMAL',
  sx = '',
}: Props) {
  const ComponentTag = component
  const className = classnames(
    'm-0',
    getRoleStyle(role),
    getAlignStyle(align),
    { 'mb-[0.35em]': gutterBottom },
    { 'whitespace-nowrap overflow-hidden text-ellipsis': noWrap },
    getFontWeightStyle(fontWeight),
    sx
  )

  return (
    <ComponentTag style={{ display, color }} className={className}>
      {children}
    </ComponentTag>
  )
}

function getRoleStyle(role: Role) {
  switch (role) {
    case 'DISPLAY_LARGE':
      return 'text-display-large leading-64 -tracking-[-0.015625em]'
    case 'DISPLAY_MEDIUM':
      return 'text-display-medium leading-52'
    case 'DISPLAY_SMALL':
      return 'text-display-small leading-44'
    case 'HEADLINE_LARGE':
      return 'text-headline-large leading-10'
    case 'HEADLINE_MEDIUM':
      return 'text-headline-medium leading-9'
    case 'HEADLINE_SMALL':
      return 'text-2xl'
    case 'TITLE_LARGE':
      return 'text-title-large leading-7'
    case 'TITLE_MEDIUM':
      return 'text-title-medium leading-6 tracking-[0.009375em]'
    case 'TITLE_SMALL':
      return 'text-title-small leading-5 tracking-[0.00625em]'
    case 'LABEL_LARGE':
      return 'text-label-large leading-5 tracking-[0.00625em]'
    case 'LABEL_MEDIUM':
      return 'text-label-medium leading-4 tracking-[0.03125em]'
    case 'LABEL_SMALL':
      return 'text-label-small leading-4 tracking-[0.03125em]'
    case 'BODY_LARGE':
      return 'text-body-large leading-6 tracking-[0.03125em]'
    case 'BODY_MEDIUM':
      return 'text-body-medium leading-5 tracking-[0.015625em]'
    case 'BODY_SMALL':
      return 'text-body-small leading-4 tracking-[0.025em]'
    default:
      return ''
  }
}

function getAlignStyle(align: Align) {
  switch (align) {
    case 'INHERIT':
      return ''
    case 'LEFT':
      return 'text-left'
    case 'CENTER':
      return 'text-center'
    case 'RIGHT':
      return 'text-right'
    case 'JUSTIFY':
      return 'text-justify'
    default:
      return ''
  }
}

function getFontWeightStyle(fontWeight: FontWeight) {
  switch (fontWeight) {
    case 'EXTRALIGHT':
      return 'font-extralight'
    case 'LIGHT':
      return 'font-light'
    case 'NORMAL':
      return 'font-normal'
    case 'MEDIUM':
      return 'font-medium'
    case 'SEMIBOLD':
      return 'font-semibold'
    case 'BOLD':
      return 'font-bold'
    case 'EXTRABOLD':
      return 'font-extrabold'
    case 'BLACK':
      return 'font-black'
    default:
      return ''
  }
}
