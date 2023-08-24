import { QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

export function getQueryClient() {
  return cache(() => new QueryClient())
}
