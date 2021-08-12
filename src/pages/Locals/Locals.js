import { useParams } from 'react-router-dom'
import LocalsButtonList from '../../components/Molecules/LocalsButtonList'
import Button from '../../components/Atoms/Button'
import mokito from './mokito'
import { Container } from './styles'
import localMap from '../../assets/img/contents-map.png'
import localsImg from '../../assets/img/locals-img.png'

export default function Locals() {
  const { id } = useParams()

  console.log(id)

  return (
    <Container>
      <div className="container-img">
        <figure>
          <img src={localsImg} alt="" width="100%" />
        </figure>
      </div>
      <div className="container">
        <div className="title-card">
          <h2>Ubicación y Horario</h2>
        </div>
        <div className="card">
          <div className="primary-content">
            <figure className="columns">
              <img src={localMap} alt="" width="100%" />
            </figure>
            <div className="columns unique">
              {mokito.map((mock, i) => (
                <div key={i} className="text-content">
                  <h4>{mock.day}</h4>
                  <h4>{mock.timeRange}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="special">
            <LocalsButtonList />
            <Button isRed m="20px 0" style={{ alignSelf: 'center' }}>
              Más atributos
            </Button>
          </div>
        </div>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--text-button-default-color)',
            marginBottom: '20px',
          }}
        >
          Vda. El Mortiño, San José de Isnos, Huila <br /> Teléfono +57 315
          4765559
        </p>
        <hr style={{ width: '70%', margin: '10px 0' }} />
        <div className="about-business-content">
          <h2>Sobre el negocio</h2>
          <p className="descripcion">
            AGENCIA OPERADORA DE TURISMO ADRENALINA EXTREMA CAÑÓN DEL MAGDALENA
            es una empresa sur-huilense que se dedica a prestar servicios
            turísticos de hospedaje rural tipo galmping y camping, tambien,
            actividades de aventura que van de la mano con los estándares de
            seguridad más adecuados. Todas nuestras estructuras tienen los
            estudios y cálculos También contamos con registro nacional de
            turismo.
            <br />
            <br />
            En la AGENCIA OPERADORA DE TURISMO ADRENALINA EXTREMA CAÑÓN DEL
            MAGDALENA reconocemos nuestro - com promiso con la protección del
            medio ambiente y la integración con la comunidad, es por esto que
            nuestras actividades están enfocadas en una relación amigable entre
            el hombre y la naturaleza, por eso te pedimos colaboración en deposi
            - tar la basura únicamente en los sitios que tenemos para su
            recolección.
          </p>
        </div>
      </div>
    </Container>
  )
}
