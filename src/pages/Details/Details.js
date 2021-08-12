import { SearchList } from '../../components/Molecules/SearchList/SearchList'
import { CardDetails } from '../../components/Molecules/CardDetails/CardDetails'
import {
  CardsContainerHeader,
  CardsDetailsContainer,
  DetailsContainer,
  FiltersContainer,
  MapContainer,
  CardsContainer,
} from './styles'
import Mapa from '../../assets/img/mapa.png'
import img1 from '../../assets/img/mara-fusion.png'
import img2 from '../../assets/img/la-viuda.png'

export const Details = () => {
  const cardDetails = [
    {
      id: 1,
      title: 'Maro Fusión',
      location: 'Km 8 vía Pitalito - Mocoa, Vereda San Francisco',
      text: `Comida saludable, Nutrición, Manipulación Alimentos, Salud, Innovación,
      Diabetes, Hipertensión, comida Orgánica. Ciencia, Inocuo.
      pagina dedicada a la comercialización de alimentos saludables y orientada
      a mejor la calidad de vida de los colombianos.`,
      img: img1,
      phone: '3506996565',
    },
    {
      id: 2,
      title: 'La Viuda Millonaria',
      location: 'Km 7 Timaná - Pitalito Vereda Cascajal',
      text: `Invitados a disfrutar carne la llanera sancocho de gallina platos a la carta en
      un ambiente familiar parque infantil amplio parqueadero.`,
      img: img2,
      phone: '3106982434',
    },
  ]

  return (
    <>
      <DetailsContainer>
        <FiltersContainer>
          <h2>Filtros</h2>
          <div className="sugeridos">
            <h3>Sugeridos</h3>
          </div>
          <SearchList styleBtn={{ fontSize: '14px' }} />
          <div className="distancia">
            <h3>Distancia</h3>
          </div>
        </FiltersContainer>
        <CardsDetailsContainer>
          <CardsContainerHeader>
            <h2>Navegando por las empresas de Pitalito</h2>
            <p>Ordenar </p>
          </CardsContainerHeader>
          <CardsContainer>
            {cardDetails.map((card) => (
              <CardDetails
                key={card.id}
                id={card.id}
                title={card.title}
                location={card.location}
                text={card.text}
                img={card.img}
              />
            ))}
          </CardsContainer>
        </CardsDetailsContainer>
        <MapContainer>
          <img src={Mapa} width="100%" height="100%" alt="Google Map" />
        </MapContainer>
      </DetailsContainer>
    </>
  )
}
