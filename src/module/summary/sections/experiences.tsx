import React from 'react'
import TitleSummaries from '../title-summaries'
import PattrickImg from 'assets/images/pattrick.gif'
import { motion } from 'framer-motion'
import Experience from '../experience'
import WithCursorElement from 'components/common/with-cursor-element'

const Experiences = () => {
  return (
    <div className="CONTAINER MENU-CHANGE-Y-100-STAGGER relative mt-[10vh] grid grid-cols-1 gap-16 lg:grid-cols-2">
      <div className="CHILD-STAGGER" id="education">
        <TitleSummaries text="Education" observeId="education" />
        <ul className="list-disc marker:text-white">
          <Experience
            notAllowed
            title="Multimedia (SMK)"
            sentences={['SMK PGRI 109', 'TANGERANG , Indonesia', '8,4']}
            link="/"
          />
        </ul>
      </div>
      <div className="CHILD-STAGGER" id="experiences">
        <TitleSummaries text="Experiences" observeId="experiences" />
        <ul className="list-disc marker:text-white">
          <Experience title="PT. Kimberly Clark" sentences={['Koordinator Produksi', '2021 - 2023']} link="/" />
          <Experience notAllowed title="PT. Kimberly Clark" sentences={['Helper Produksi', '2023 - 2024']} link="/" />
          <Experience notAllowed title="PT. Pepsico" sentences={['Helper Produksi', '2024 - 2025']} link="/" className="mt-5" />
        </ul>
      </div>
      <div className="CHILD-STAGGER" id="selected-project">
        <TitleSummaries text="Selected Projects" observeId="selected-project" />
        <ul className="list-disc marker:text-white">
          <Experience notAllowed title="Chill Film" sentences={['Fullstack Developer', 'Des 2025 - Feb 2026',]} link="/" />
          
        </ul>
      </div>
      <div className="CHILD-STAGGER" id="selected-certificate">
        <TitleSummaries text="Selected Certificate" observeId="selected-certificate" />
        <ul className="list-disc marker:text-white">
          <Experience
            title="Fullstack Web Developer"
            sentences={['Hari Senin', '2025 - 2026']}
            link=""
          />
        </ul>
      </div>
      <div className="CHILD-STAGGER" id="tech">
        <TitleSummaries text="Tech" observeId="tech" />
        <p className="font-poppins text-base text-secondary lg:text-2xl">
          ReactJS . NextJS . NestJS . NodeJS . Typescript . Javascript  . MySQL
          <WithCursorElement
            state={{
              element: {
                element: (
                  <motion.img
                    src={PattrickImg}
                    alt="getting dizzy"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.7 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-[300px]"
                  />
                ),
                key: 'dizzy',
                type: 'hover'
              }
            }}
          >
            <span className="ml-2 text-yellow-100">And Keep Learning...</span>
          </WithCursorElement>
        </p>
      </div>
      <div className="CHILD-STAGGER" id="contact">
        <TitleSummaries text="Contact" observeId="contact" />
        <ul className="list-disc marker:text-white">
          <Experience title="Email" sentences={['rafliy945@gmail.com']} link="mailto:rafliy945@gmail.com" />
          <Experience title="Linkedin" sentences={['Rafli Yanto']} link="https://www.linkedin.com/in/rafli-yanto" className="mt-5" />
        </ul>
      </div>
    </div>
  )
}

export default React.memo(Experiences)
