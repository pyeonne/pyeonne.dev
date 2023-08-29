import { ArrowDownIcon } from '@web/components/atoms/@icons'
import GeometricBox from '@web/components/atoms/geometric_box'
import Line from '@web/components/atoms/line'
import Typography from '@web/components/atoms/typography'
import HomeSocial from '@web/components/molecules/home_social'
import Image from 'next/image'

export default function HomeSection() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid gap-6 pt-8">
        <Typography
          role="DISPLAY_LARGE"
          component="h1"
          sx="home__name text-center font-player"
        >
          Hana Jeong
        </Typography>

        <div className="home__perfil relative justify-self-center">
          <div className="home__image w-[220px]">
            <Image
              className="home__img relative z-10"
              src="/images/home_perfil.jpg"
              alt="home perfil"
              width={800}
              height={1144}
              priority
            />
            <div className="home__shadow transition-background-color duration-400 w-full h-full z-5 bg-container border-4 border-black absolute -right-3 -bottom-3" />
            <Image
              className="home__arrow left-[40%] -bottom-16 absolute invert w-[50px] transition-filter duration-400"
              src="/vectors/curved_arrow.svg"
              alt="curved arrow"
              width={53}
              height={68}
              priority
            />
            <Line right={-2} bottom={-0.5} priority />
            <GeometricBox top={2.5} left={-0.7} />
            <HomeSocial />
          </div>
        </div>

        <div className="home__info mt-16">
          <p className="home__description text-center text-title mb-6">
            <b>Frontend Developer</b>, with knowledge in web development and
            design, I offer the best projects resulting in quality work.
          </p>

          <a href="#about" className="home__scroll block w-max mx-auto">
            <div className="home__scroll-box  transition-background-color duration-400 overflow-hidden bg-black text-white w-9 h-9 grid place-content-center cursor-pointer">
              <ArrowDownIcon size={16} className="animate-scroll-down" />
            </div>

            <span className="home__scroll-text hidden">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  )
}
