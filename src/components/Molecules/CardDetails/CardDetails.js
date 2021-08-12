import Button from '../../Atoms/Button'
import Face from '../../../assets/icons/facebook.svg'
import Instagram from '../../../assets/icons/instagram.svg'
import Whats from '../../../assets/icons/whatsapp.svg'
import Locat from '../../../assets/icons/location.svg'
import {
  ContactContainer,
  ContainerCard,
  InfoContainer,
  LocationCard,
  SocialMediaContainer,
  TextInfoCard,
  TitleCard,
} from './styles'
// import ImageCard from '../../../assets/img/mara-fusion.png'

export const CardDetails = ({
  id = '',
  title = '',
  location = '',
  text = '',
  img = '',
  phone = '',
  children,
}) => {
  return (
    <ContainerCard>
      <div className="card-image">
        <img src={img} width="300px" alt={`${title} logo`} />
      </div>
      <div className="card-header">
        <TitleCard>
          {id}. {title}
        </TitleCard>
        <LocationCard>{location}</LocationCard>
        <TextInfoCard>{text}</TextInfoCard>
        <InfoContainer>
          <SocialMediaContainer>
            <img src={Face} width="36px" alt="facebook" />
            <img src={Whats} width="36px" alt="whatsapp" />
            <img src={Instagram} width="36px" alt="Instagram" />
            <img src={Locat} width="36px" alt="Location" />
          </SocialMediaContainer>
          <ContactContainer>
            <p>Tel: {phone}</p>
            <Button
              bigSize
              m="0 10px 0 0"
              borderColor="var(--border-button-color-default)"
            >
              Acceder
            </Button>
          </ContactContainer>
        </InfoContainer>
      </div>
      <div className="card-body">{children}</div>
    </ContainerCard>
  )
}
