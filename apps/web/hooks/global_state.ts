import { useQuery, useQueryClient } from '@tanstack/react-query'

export default function useGlobalState<T>(
  key: string,
  initialData: T
): [T, (value: T) => void] {
  const queryClient = useQueryClient()
  const queryKey = [key]

  const queryData = useQuery<T>(queryKey, () => initialData, {
    enabled: false,
    initialData,
  }).data

  const setQueryData = (value: T) => queryClient.setQueriesData(queryKey, value)

  return [queryData, setQueryData]
}
