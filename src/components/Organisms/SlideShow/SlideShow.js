import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { Container, ButtonAnimate as Button, Circle } from './styles'
import Slide1 from '../../../assets/img/slide-show-1.jpg'
import Slide2 from '../../../assets/img/slide-show-2.jpg'
import Slide3 from '../../../assets/img/slide-show-3.jpg'

const slides = [Slide1, Slide2, Slide3]

export const SlideShow = ({ children }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const whileHover = { scale: 1.2, transition: { duration: 0.5 } }
  const whileTap = { scale: 0.9 }

  const imageIndex = wrap(0, slides.length, page)

  const paginate = useCallback(
    (newDirection) => setPage([page + newDirection, newDirection]),
    [page]
  )

  const paginateToId = (imgId, newDirection) => setPage([imgId, newDirection])

  useEffect(() => {
    const timeoutTransition = setTimeout(() => {
      paginate(1)
    }, 3500)

    return () => {
      clearTimeout(timeoutTransition)
    }
  }, [paginate])

  return (
    <Container>
      <div style={{ position: 'relative', height: '100%' }}>
        <motion.div
          className="img-contained"
          key={page}
          style={{ backgroundImage: `url(${slides[imageIndex]})` }}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'just',
            stiffness: 0.5,
            damping: 0.5,
            duration: 0.5,
          }}
        />
        <div className="container-search">
          <div className="container-search-into">{children}</div>
        </div>
        <div className="container-float">
          <div className="contain-btn">
            <Button
              whileHover={whileHover}
              whileTap={whileTap}
              onClick={() => paginate(-1)}
            >
              <FaAngleLeft size={50} color="gray" />
            </Button>
          </div>
          <div className="contain-btn">
            <Button
              whileHover={whileHover}
              whileTap={whileTap}
              onClick={() => paginate(1)}
            >
              <FaAngleRight size={50} color="gray" />
            </Button>
          </div>
        </div>
        <div className="circles-container">
          {slides.map((_, i) => (
            <Circle
              key={i}
              isActive={i === imageIndex}
              onClick={() => paginateToId(i, 1)}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
