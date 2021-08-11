import styled from 'styled-components'
import { motion } from 'framer-motion'

const getVariantButton = ({ isRed = false }) => (isRed ? 'primary' : 'default')

const getSize = ({ bigSize = false }) => (bigSize ? '18px' : '16px')

export const Btn = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ borderColor }) => (borderColor ? borderColor : 'transparent')};
  background-color: var(--bg-button-color-${getVariantButton});
  cursor: pointer;
  font-size: ${getSize};
  padding: ${({ p = undefined }) => (p ? p : '5px 15px')};
  margin: ${({ m = undefined }) => (m ? m : '')};
  color: var(--text-button-${getVariantButton}-color);
  border-radius: ${({ borderRadius = undefined }) =>
    borderRadius ? borderRadius : '4px'};

  &:hover {
    background-color: var(--bg-button-hover-color-${getVariantButton});
  }

  &:focus {
    /* opcion */
    /* box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.8); */
  }
`
