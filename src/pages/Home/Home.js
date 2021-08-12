import SlideShow from '../../components/Organisms/SlideShow'
import SearchBar from '../../components/Molecules/SearchBar'
import Card from '../../components/Molecules/Card'
import CardEmploye from '../../components/Organisms/CardEmploye'

const Home = () => {
  return (
    <>
      <SlideShow>
        <SearchBar />
      </SlideShow>
      <CardEmploye />
      <Card title="huila"></Card>
    </>
  )
}

export default Home
