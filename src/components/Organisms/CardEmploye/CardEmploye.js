import Slider from 'react-slick'
import Card from '../../Molecules/Card'
import images from '../../../assets'
import { ContentImages, ImageContent, Content } from './styles'

export const CardEmploye = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <Card title="empresas">
      <Content>
        <Slider {...settings}>
          {images.map((image, i) => (
            <ContentImages key={i}>
              <ImageContent style={{ backgroundImage: `url(${image})` }} />
            </ContentImages>
          ))}
        </Slider>
      </Content>
    </Card>
  )
}
