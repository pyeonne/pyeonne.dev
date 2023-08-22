'use client'

import { trpc } from '@web/app/trpc'
import { useEffect, useState } from 'react'

import Typography from './components/atoms/typography'

export default function ClientSide() {
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    trpc.hello
      .query({ name: 'Tom' })
      .then(({ greeting }) => setGreeting(greeting))
  }, [])
  return (
    <Typography role="DISPLAY_LARGE" color="text-white" gutterBottom noWrap>
      I am client side: {greeting}
    </Typography>
  )
}
