import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import LoginView from './components/user/loginView.js'
import RegisterView1 from './components/user/registerView1.js'
import RegisterView2 from './components/user/registerView2.js'
import Home from './components/home/Home.js'
import { Nav, NavItem } from 'reactstrap'

function App(props) {
  return (
    <section style={{ maxWidth: '960px', margin: '0 auto' }}>
      <Router>
        <div>
          <Nav>
            <NavItem>
              <Link className="nav-link" to={'/register1'}>
                Register1
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={'/register2'}>
                Register2
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/sites">
                Sites
              </Link>
            </NavItem>
          </Nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Redirect exact from="/" to={localStorage.token ? '/login' : '/register2'} />
            <Route exact path="/register1" component={RegisterView1} />
            <Route exact path="/register2" component={RegisterView2} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/sites" component={Home} />
          </Switch>
        </div>
      </Router>
    </section>
  )
}

export default App
