import Typography from '@web/components/atoms/typography'
import classNames from 'classnames'

type Props = {
  children: React.ReactNode
}

export default function SectionTitle({ children }: Props) {
  return (
    <Typography
      role="DISPLAY_MEDIUM"
      component="h2"
      fontWeight="BOLD"
      sx={classNames(
        'relative w-max mt-3 mx-auto mb-8',
        'after:content-[""] after:w-14 after:h-10 after:-top-1 after:-right-2 after:absolute after:bg-[hsla(14,98%,50%,0.2)]'
      )}
    >
      {children}
      <div className="" />
    </Typography>
  )
}
