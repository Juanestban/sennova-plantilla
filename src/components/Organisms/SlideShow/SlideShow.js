import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { Container, ButtonAnimate as Button } from './styles'
import Slide1 from '../../../assets/img/slide-show-1.jpg'
import Slide2 from '../../../assets/img/slide-show-2.jpg'
import Slide3 from '../../../assets/img/slide-show-3.jpg'

const slides = [Slide1, Slide2, Slide3]

export const SlideShow = ({ children }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const whileHover = { scale: 1.2, transition: { duration: 0.5 } }
  const whileTap = { scale: 0.9 }

  const imageIndex = wrap(0, slides.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <Container>
      <>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="img-contained"
            key={page}
            style={{ backgroundImage: `url(${slides[imageIndex]})` }}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 300 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
          />
        </AnimatePresence>
        <div className="container-search">{children}</div>
        <div className="container-float">
          <div className="contain-btn">
            <Button
              whileHover={whileHover}
              whileTap={whileTap}
              onClick={() => paginate(1)}
            >
              <FaAngleLeft size={50} color="gray" />
            </Button>
          </div>
          <div className="contain-btn">
            <Button
              whileHover={whileHover}
              whileTap={whileTap}
              onClick={() => paginate(-1)}
            >
              <FaAngleRight size={50} color="gray" />
            </Button>
          </div>
        </div>
      </>
    </Container>
  )
}
