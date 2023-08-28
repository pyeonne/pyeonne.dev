import HomeSection from '../organisms/home_section'

export default function HomePage() {
  return (
    <main className="main">
      <HomeSection />
      <section className="about section" id="about" />
      <section className="services section" />
    </main>
  )
}
