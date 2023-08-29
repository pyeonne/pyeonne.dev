import AboutSection from '../organisms/about_section'
import HomeSection from '../organisms/home_section'

export default function HomePage() {
  return (
    <main className="main">
      <HomeSection />
      <AboutSection />
      <section className="services section" />
    </main>
  )
}
