import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100%;
  height: calc(80vh - 20px);
  position: relative;
  overflow: hidden;

  & .img-contained {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  & .container-float {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    position: absolute;
    top: 50%;
  }

  & .container-search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
  }
`

export const ButtonAnimate = styled(motion.button)`
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
