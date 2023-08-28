import useGlobalState from './global_state'

export default function useHeader() {
  const [shadowHeader, setShadowHeader] = useGlobalState('shadowHeader', false)

  const addShadowHeader = () => setShadowHeader(true)

  const removeShadowHeader = () => setShadowHeader(false)

  return {
    shadowHeader,
    addShadowHeader,
    removeShadowHeader,
  }
}
