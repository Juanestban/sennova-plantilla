import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100%;
  height: calc(80vh - 20px);
  position: relative;
  background-color: var(--bg-slide-color);
  /* overflow: hidden; */

  & .img-contained {
    width: 100%;
    height: 100%;
    overflow: hidden;
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
    z-index: 100;

    & .container-search-into {
      width: 80%;
    }
  }

  & .circles-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    position: absolute;
    bottom: 0;
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

export const Circle = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin: 0 5px;
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;
  background-color: ${({ isActive = false }) =>
    isActive ? 'white' : 'transparent'};
`
