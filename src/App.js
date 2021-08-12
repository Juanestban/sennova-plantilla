import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Home from './pages/Home'
import Navigation from './components/Organisms/Navigation'
import ButtonScroll from './components/Molecules/ButtonScroll'
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Footer from './components/Organisms/Footer'

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>Director</title>
        </Helmet>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </HelmetProvider>
      <ButtonScroll />
    </div>
  )
}

export default App
