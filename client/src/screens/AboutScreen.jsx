import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

export default function AboutScreen() {
  return (
    <section className='py-5 bg-light'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <Image
              src='images/about_img.jpg'
              alt='About Our Center'
              fluid
              rounded
            />
          </Col>
          <Col md={6}>
            <div>
              <h2 className='mb-4'>About Our Center</h2>
              <p>
                We are dedicated to providing exceptional services that
                prioritize your relaxation and well-being. Our center offers a
                range of experiences designed to rejuvenate your mind and body.
                Each service is tailored to create a calm and peaceful
                environment for you to unwind.
              </p>
              <p>
                Whether you seek a moment of tranquility or a complete wellness
                retreat, our experienced team is here to guide you on your
                journey to relaxation.
              </p>
              <Button variant='primary' href='/about'>
                Read More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
