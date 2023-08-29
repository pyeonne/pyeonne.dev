import { LinkedInIcon, SendPlaneIcon } from '@web/components/atoms/@icons'
import Button from '@web/components/atoms/button'
import GeometricBox from '@web/components/atoms/geometric_box'
import Line from '@web/components/atoms/line'
import SectionTitle from '@web/components/molecules/section_title'
import classNames from 'classnames'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section
      className="about section bg-container transition-background-color duration-400"
      id="about"
    >
      <div className="about__container container grid gap-6 gap-x-0">
        <SectionTitle>About Me.</SectionTitle>
        <div className="about__perfil relative justify-self-center mt-10 mb-18">
          <div className="about__image w-[220px]">
            <Image
              className="about__img relative border-4 border-white z-1"
              src="/images/about_perfil.jpg"
              alt="about perfil"
              width={800}
              height={1110}
            />
            <div className="about__shadow border-b-4 transition-background-color duration-400 border-first absolute w-[150px] h-[385px] bg-body -right-14 -top-10" />
            <GeometricBox top={1.5} right={-2.8} />
            <Line top={6} right={-1.25} />
            <div className="about__box absolute w-10 h-10 bg-first -right-2 bottom-6" />
          </div>
        </div>
        <div className="about__info pl-5">
          <p
            className={classNames(
              'about__description relative text-title mb-6',
              'after:content-[""] after:w-5 after:h-[1px] after:bg-title after:absolute after:-left-7 after:top-[11px]'
            )}
          >
            Passionate about creating <b>Web Pages</b> with{' '}
            <b>UI/UX User Interface</b>, I have years of experience and many
            clients are happy with the projects carried out.
          </p>

          <ul className="about__list list-square text-title mb-12">
            <li className="about__item">
              <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git & GitHub,
              Bootstrap, Flutter & Figma.
            </li>
          </ul>

          <div className="about__buttons flex justify-center items-center gap-x-4">
            <Button component="a" href="#contact">
              <SendPlaneIcon size={20} /> Contact Me
            </Button>

            <Button component="a" href="#" target="_blank" ghost>
              <LinkedInIcon size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
