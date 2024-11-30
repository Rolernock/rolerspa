import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const services = [
  {
    id: 1,
    title: 'Ayurveda Spa',
    image: '/images/service1.jpg',
    description:
      'Experience the rejuvenating power of Ayurveda with therapies designed to relax your body and refresh your mind.'
  },
  {
    id: 2,
    title: 'Massage Spa',
    image: '/images/service2.jpg',
    description:
      'Unwind with our expertly curated massage therapies that provide relief from stress and promote overall well-being.'
  },
  {
    id: 3,
    title: 'Luxury Spa',
    image: '/images/service3.jpg',
    description:
      'Indulge in the ultimate luxury spa experience with premium treatments that leave you feeling pampered and revitalized.'
  }
]

export default function ServiceScreen() {
  return (
    <Container className='py-5'>
      <Row className='text-center mb-4'>
        <Col>
          <h2>Our Massage Services</h2>
          <p>
            Discover a range of spa services tailored to relax, rejuvenate, and
            revitalize.
          </p>
        </Col>
      </Row>
      <Row>
        {services.map(service => (
          <Col md={4} key={service.id} className='mb-4'>
            <Card className='h-100 shadow-sm'>
              <Card.Img variant='top' src={service.image} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant='primary' href='/services'>
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
