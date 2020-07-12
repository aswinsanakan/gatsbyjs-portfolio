import React from "react"
import {Link} from 'gatsby';

import '../styles/index.scss';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <h2>I'm Aswin, a full stack developer living in India.</h2>
      <p>Need a developer? <Link to='/contact'>Contact Me</Link></p>
    </Layout>
  )
}

export default Home;