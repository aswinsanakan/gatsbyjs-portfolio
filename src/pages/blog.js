import React from 'react';
import Layout from '../components/layout';

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        <li>
          Database Design: The underrated skill for a Backend developer
        </li>
        <li>
          How to integrate Firebase in NestJS
        </li>
      </ul>
    </Layout>
  )
}

export default Blog;