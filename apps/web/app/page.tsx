import { trpc } from './trpc'

export default async function RootPage() {
  const { greeting } = await trpc.hello.query({ name: 'Tom' })
  return (
    <div>
      {/* <p className="font-player text-[57px] ">Server side = {greeting}</p>
      <ClientSide /> */}
    </div>
  )
}
