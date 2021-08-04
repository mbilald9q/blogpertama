import { useState } from 'react'
import CardPost from '@components/CardPost'
import FeaturedPost from '@components/FeaturedPost'
import Head from 'next/head'
import Container from '@components/Container'
import Layout from '@components/Layout'
import mockPosts from '../utils/posts.json'

export default function Home() {
  const [post, setPost] = useState(mockPosts);

  return (
    <Layout >
      <Head>
        <title>BlogBilal</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex -mx-4 flex-wrap mt-5">
          {post.map(post=> (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-5">
              <CardPost {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
