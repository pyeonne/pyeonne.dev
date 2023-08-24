import useGlobalState from './global_state'

export default function useMenu() {
  const [menu, setMenu] = useGlobalState('menu', false)

  const openMenu = () => setMenu(true)

  const closeMenu = () => setMenu(false)

  return {
    menu,
    openMenu,
    closeMenu,
  }
}
