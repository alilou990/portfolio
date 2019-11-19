import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from './IMG_0951.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                I'm a professional web developer currently looking for a full-time position. I'm detail-oriented, organized, successfully able to handle time management, and always eager to expand my knowledge to reach my goals. In my spare time I love to read history and fantasy, knit blankets for my friends and family, and bake new delicious recipes. 
                </p>
                <ul className="actions">
                  <li>
                    <a href="https://docs.google.com/document/d/18FrEA2Jo6-np6mQHogQeCrYfbtkXqHTZvyMVahk1cg0/edit?usp=sharing" target="_blank" className="button">
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <ul className="features">
              <li>
                <section className="major">
                <h3>Languages</h3>
                </section>
                <p>
                  JavaScript || HTML5 || CSS3
                </p>
              </li>
              <li>
                <h3>Frameworks & Libraries</h3>
                <p>
                  React.js || Vue.js || Node.js || Express.js || Massive.js || Redux.js || React Redux || Jest
                </p>
              </li>
              <li>
                <h3>Databases</h3>
                <p>
                 Postgresql
                </p>
              </li>
              <li>
                <h3>Extra Technologies</h3>
                <p>
                  Axios || Bcrypt || Gatsby.js || Git || GitHub || AWS || Styled Components || Responsive Design || Postman || Photoshop
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
              <ul className="features">
              <li>
                <section className="major">
                <h3>Fabula Terra</h3>
                <h4>September 2019</h4>
                </section>
                <p>
                This was a personally developed project which is targeted for those who are developing stories with alternitive worlds for video games, books, or other mediums. Users can create and maintain details in articles under a number of different subjects, which can then be used for later reference.
                </p>
              </li>
             
              <li>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jlWM2brKCU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </li>
              <li>

              </li>
             </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact Info</h2>
              <p>
                Email: eight.falling.stars@gmail.com
                <br />
                Mobile Phone: 928-234-7775
              </p>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
