import { ContainerCard, LocationCard, TextInfoCard, TitleCard } from './styles'
// import ImageCard from '../../../assets/img/mara-fusion.png'

export const CardDetails = ({
  id = '',
  title = '',
  location = '',
  text = '',
  img = '',
  children,
}) => {
  return (
    <ContainerCard>
      <div className="card-image">
        <img src={img} width="300px" alt={`${title} logo`} />
      </div>
      <div className="card-header">
        <TitleCard>
          {id}.{title}
        </TitleCard>
        <LocationCard>{location}</LocationCard>
        <TextInfoCard>{text}</TextInfoCard>
      </div>
      <div className="card-body">{children}</div>
    </ContainerCard>
  )
}
