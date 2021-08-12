import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import HomePage from './pages/Home'
import DetailsPage from './pages/Details'
import LocalsPage from './pages/Locals/Locals'
import Navigation from './components/Organisms/Navigation'
import Footer from './components/Organisms/Footer'
import ButtonScroll from './components/Molecules/ButtonScroll'
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>Director</title>
        </Helmet>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/details" component={DetailsPage} />
            <Route path="/details/locals/:id" component={LocalsPage} />
          </Switch>
        </Router>
        <Footer />
      </HelmetProvider>
      <ButtonScroll />
    </div>
  )
}

export default App
