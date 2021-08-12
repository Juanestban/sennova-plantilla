import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import {
  Modal,
  ModalContent,
  ModalRelative,
  ModalClose,
  ButtonClose,
  TitleContent,
  Title,
} from './styles'
import {
  animateContainerModal,
  modalContentAnimate,
} from '../../../config/animatePortal'

const PortalLayout = ({
  titleModal = '',
  isVisible = false,
  sizeModal = '80%',
  children,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <Modal
          variants={animateContainerModal}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ModalContent
            sizeModal={sizeModal}
            initial="fadeIn"
            animate="fadeOut"
            exit="fadeIn"
            variants={modalContentAnimate}
          >
            <ModalRelative>
              <TitleContent>
                <Title>{titleModal}</Title>
                <ButtonClose onClick={onClose}>
                  <FiX size={25} />
                </ButtonClose>
              </TitleContent>
              {children}
            </ModalRelative>
          </ModalContent>
          <ModalClose onClick={onClose} />
        </Modal>
      )}
    </AnimatePresence>
  )
}

export const Portal = ({
  titleModal = '',
  isVisible = false,
  children,
  onClose,
  sizeModal = '80%',
}) =>
  createPortal(
    <PortalLayout
      titleModal={titleModal}
      isVisible={isVisible}
      onClose={onClose}
      sizeModal={sizeModal}
    >
      {children}
    </PortalLayout>,
    document.getElementById('portal')
  )
