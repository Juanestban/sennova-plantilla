import { FaAngleUp } from 'react-icons/fa'
import { ContainerButton, BtnScroll } from './styles'

export const ButtonScroll = () => {
  const handleToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <ContainerButton>
      <BtnScroll onClick={handleToTop}>
        <FaAngleUp size={50} color="gray" />
      </BtnScroll>
    </ContainerButton>
  )
}
