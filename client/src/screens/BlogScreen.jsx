import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const blogPosts = [
  {
    id: 1,
    image: '/images/blog1.jpg',
    date: '16 March',
    title: 'Quis Nostrud',
    description:
      'This blog explores ways to maximize productivity while minimizing distractions. Discover how to create a balanced workflow.'
  },
  {
    id: 2,
    image: '/images/blog2.jpg',
    date: '17 March',
    title: 'Veniam, Quis',
    description:
      'Learn about the latest trends in technology and how they can help transform the way we live and work.'
  },
  {
    id: 3,
    image: '/images/blog3.jpg',
    date: '18 March',
    title: 'Tempor Incididunt',
    description:
      'Explore the benefits of incorporating mindfulness into your daily routine for a more fulfilling life.'
  }
]

export default function BlogScreen() {
  return (
    <Container className='py-5'>
      <Row className='text-center mb-4'>
        <Col>
          <h2>Latest Blog</h2>
          <p>Explore insights, trends, and tips from our latest blog posts.</p>
        </Col>
      </Row>
      <Row>
        {blogPosts.map(post => (
          <Col md={4} key={post.id} className='mb-4'>
            <Card className='h-100 shadow-sm'>
              <Card.Img variant='top' src={post.image} alt={post.title} />
              <Card.Body>
                <Card.Subtitle className='mb-2 text-muted'>
                  {post.date}
                </Card.Subtitle>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button variant='primary' href='/blog'>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
