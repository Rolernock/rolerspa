import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import DatePicker from 'react-datepicker'
import { sendMessage } from '../slices/messageSlice'
import 'react-datepicker/dist/react-datepicker.css'

export default function ContactScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialState = {
    name: '',
    email: '',
    phone: '',
    time: '',
    date: '',
    message: ''
  }
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const { name, email, phone, time, date, message } = formData
  const handleChange = evt => {
    const { name, value } = evt.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }
  const handleDateChange = date => {
    setFormData(prevData => ({ ...prevData, date: date.toISOString() }))
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const results = await dispatch(sendMessage(formData)).unwrap()
      results.msg && navigate('/')
    } catch (error) {
      const errorMessages = error.reduce((acc, err) => {
        acc[err.path] = err.msg
        return acc
      }, {})
      setErrors(errorMessages)
    }
  }

  return (
    <Container className='py-5'>
      <Row className='mb-4 text-center'>
        <Col>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need assistance, feel free to get in
            touch with us.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} className='mb-4'>
          <h4>Our Information</h4>
          <p>Address: 100m east of Magunas Supermarket, Murang'a</p>
          <p>Email: rolernockgoines@gmail.com</p>
          <p>Phone: +254 791483839</p>
        </Col>
        <Col md={6}>
          <h4>Send a Message</h4>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId='name' className='mb-3'>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    isInvalid={errors.name}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId='email' className='mb-3'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter your email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    isInvalid={errors.email}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId='phone' className='mb-3'>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your phone number'
                    name='phone'
                    value={phone}
                    onChange={handleChange}
                    isInvalid={errors.phone}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId='time' className='mb-3'>
                  <Form.Label>Preferred Time</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='12:23PM'
                    name='time'
                    value={time}
                    onChange={handleChange}
                    isInvalid={errors.time}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.time}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId='date' className='mb-3'>
                  <Form.Label className='mx-1'>Preferred Date</Form.Label>
                  <DatePicker
                    selected={date}
                    onChange={handleDateChange}
                    className='form-control'
                    dateFormat='MMMM d, yyyy'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.date}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId='message' className='mb-3'>
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={4}
                    placeholder='Enter your message here'
                    name='message'
                    value={message}
                    onChange={handleChange}
                    isInvalid={errors.message}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Button type='submit' className='w-100'>
                  Send Now
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
