import BDDImg from 'assets/images/bdd-summary.png'
import DicodingElitImg from 'assets/images/dicoding-elit-summary.png'
import IDCampImg from 'assets/images/idcamp-summary.png'
import JrgImg from 'assets/images/jrg-summary.png'
import MonaproImg from 'assets/images/monapro-summary.png'
import PanggilinImg from 'assets/images/panggilin-summary.png'
import KimberlyImg from 'assets/images/Kimberly.jpeg'
import PepsicoImg from 'assets/images/pepsico.jpeg'
import HariseninImg from 'assets/images/Harisenin.webp'
import ChillImg from 'assets/images/Chill.png'
import Magnet from 'components/effect/magnet'
import { motion } from 'framer-motion'
import { easeDefault } from 'lib/utils'
import ExperienceRow, { ExperienceRowProps } from 'module/about/experience-row'
import LetterSpacingTitle from 'module/about/letter-spacing-title'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function SectionExperiences() {
  const experiences: ExperienceRowProps[] = [
    {
      text1: 'PT. Kimberly Clark',
      text2: '2021 - 2023',
      text3: 'Koordinator Produksi',
      color: 'rgba(158,107,184,0.996078)',
      image: KimberlyImg,
    },
    { text1: 'PT. Kimberly Clark', text2: '2023 - 2024', text3: 'Operator Produksi', color: '#0091F8', image: KimberlyImg },
    { text1: 'PT. Pepsico', text2: '2024 - 2025', text3: 'Helper Produksi', color: '#F1592A', image: PepsicoImg }
  ]

  const selectedProjects: ExperienceRowProps[] = [
    { text1: 'Chill-Film', text2: 'Contract', text3: 'Fullstack Developer', color: '#F85959', image: ChillImg },
  ]

  const actvities: ExperienceRowProps[] = [
    { text1: 'Harisenin', text2: '2025/2026', text3: 'Pelajar', image: HariseninImg },
  
  ]

  return (
    <section id="section-experiences-about" className="CONTAINER">
      <Magnet strength={10} className="z-[-10] mt-4 w-fit">
        <motion.div
          animate={{ width: '100px' }}
          initial={{ width: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 1, ease: easeDefault }}
          className="MENU-CHANGE-OPACITY-0 flex h-[100px] items-center justify-center bg-yellow-300"
        >
          <Magnet>
            <AiOutlineArrowDown className="text-8xl" />
          </Magnet>
        </motion.div>
      </Magnet>
      <LetterSpacingTitle>Experiences</LetterSpacingTitle>
      <div className="MENU-CHANGE-Y-100-STAGGER">
        {experiences.map((exp, i) => (
          <ExperienceRow {...exp} key={i} />
        ))}
      </div>
      <div className="h-[10vh] md:h-[15vh] lg:h-[30vh]"></div>
      <Magnet strength={10} className="z-[-10] mt-4 w-fit">
        <motion.div
          animate={{ width: '100px' }}
          initial={{ width: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 1, ease: easeDefault }}
          className="flex h-[100px] items-center justify-center bg-yellow-300"
        >
          <Magnet>
            <AiOutlineArrowDown className="text-8xl" />
          </Magnet>
        </motion.div>
      </Magnet>
      <LetterSpacingTitle>Selected Projects</LetterSpacingTitle>
      <div className="MENU-CHANGE-Y-100-STAGGER">
        {selectedProjects.map((exp, i) => (
          <ExperienceRow {...exp} key={i} />
        ))}
      </div>
      <div className="h-[10vh] md:h-[15vh] lg:h-[30vh]"></div>
      <Magnet strength={10} className="z-[-10] mt-4 w-fit">
        <motion.div
          animate={{ width: '100px' }}
          initial={{ width: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 1, ease: easeDefault }}
          className="flex h-[100px] items-center justify-center bg-yellow-300"
        >
          <Magnet>
            <AiOutlineArrowDown className="text-8xl" />
          </Magnet>
        </motion.div>
      </Magnet>
      <LetterSpacingTitle>Selected Activities</LetterSpacingTitle>
      <div className="MENU-CHANGE-Y-100-STAGGER">
        {actvities.map((exp, i) => (
          <ExperienceRow {...exp} key={i} />
        ))}
      </div>
    </section>
  )
}
