import SlideShow from '../../components/Organisms/SlideShow'
import SearchBar from '../../components/Molecules/SearchBar'
import Card from '../../components/Molecules/Card'

const Home = () => {
  return (
    <>
      <SlideShow>
        <SearchBar />
      </SlideShow>
      <Card title="empresas"></Card>
      <Card title="huila"></Card>
    </>
  )
}

export default Home
