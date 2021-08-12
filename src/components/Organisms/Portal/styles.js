import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Modal = styled(motion.div)`
  background-color: rgba(32, 35, 42, 0.5);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 997;
`

export const ModalContent = styled(motion.div)`
  width: ${({ sizeModal = '80%' }) => sizeModal};
  /*  */
  height: 70vh;
  max-height: 90vh;
  margin: 10vh auto;
  position: relative;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;

  z-index: 999;
`

export const ModalRelative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
`

export const ModalClose = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 998;
  /* cursor: pointer; */
`

export const ButtonClose = styled.button`
  display: flex;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
`

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

export const Title = styled.p`
  font-size: 18px;
`
