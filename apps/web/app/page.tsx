import ClientSide from './client_side'
import { trpc } from './trpc'

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: 'Tom' })
  return (
    <div>
      <p className="font-player text-[57px]">Server side = {greeting}</p>
      <ClientSide />
    </div>
  )
}
