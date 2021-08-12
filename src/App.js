import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Home from './pages/Home'
import Navigation from './components/Organisms/Navigation'
import ButtonScroll from './components/Molecules/ButtonScroll'
import './App.css'

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
      </HelmetProvider>
      <ButtonScroll />
    </div>
  )
}

export default App
