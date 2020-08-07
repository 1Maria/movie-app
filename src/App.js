import React from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from './Navigation';
import CurrentlyPlaying from './pages/CurrentlyPlaying';
import Search from './pages/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    query: ''
  }

  render() {
    return (
      <Router>
        <Navigation
          onSearch={(query) => {
            this.setState({ query })
          }}
        />
        <Container>

          <Switch>
            <Route exact path="/">
              <CurrentlyPlaying />
            </Route>
            <Route path="/currently_playing">
              <CurrentlyPlaying />
            </Route>
            <Route path="/search">
              <Search query={this.state.query} />
            </Route>
          </Switch>

        </Container>
      </Router>
    );
  };
}

export default App;

