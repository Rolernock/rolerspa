// import { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Col, Row, Card, ListGroup, Button, Container } from 'react-bootstrap'
// import { FaRegCalendarAlt, FaTrashAlt } from 'react-icons/fa'
// import { format } from 'date-fns'
// import { readMessages, deleteMessage } from '../slices/messageSlice'
// import Spinner from '../components/Spinner'
// import DeleteMessageModal from '../components/DeleteMessageModel'

// export default function ReadMessageScreen() {
//   const dispatch = useDispatch()
//   const { msg } = useSelector(state => state.messages)
//   const [showModal, setShowModal] = useState(false)
//   const [msgId, setMsgId] = useState(null)

//   const handleCloseModal = () => {
//     setShowModal(false)
//     setMsgId(null)
//   }
//   const handleShowModal = msgId => {
//     setMsgId(msgId)
//     setShowModal(true)
//   }

//   useEffect(() => {
//     dispatch(readMessages())
//   }, [dispatch])

//   const handleDelete = async () => {
//     if (msgId) {
//       await dispatch(deleteMessage(msgId))
//       await dispatch(readMessages())
//       handleCloseModal()
//     }
//   }

//   return (
//     <>
//       {!msg ? (
//         <Spinner />
//       ) : msg.length === 0 ? (
//         <h2 className='fw-bold text-center mt-5'>No Messages to read.</h2>
//       ) : (
//         <Container>
//           <h2 className='fw-bold text-center'>Messages</h2>
//           <Row>
//             {msg.map(sms => (
//               <Col lg={4} md={6} key={sms._id}>
//                 <Card.Body>
//                   <Card.Title>
//                     {sms.name} - {sms.email} : {sms.phone}
//                   </Card.Title>
//                   <Card.Subtitle>{sms.time}</Card.Subtitle>
//                   <Card.Text>
//                     {sms.message}, Appointment Date:{' '}
//                     {format(sms.date, 'MMMM dd, yyyy hh:mm a')}
//                   </Card.Text>
//                 </Card.Body>
//                 <ListGroup>
//                   <ListGroup.Item className='d-flex justify-content-between align-items-center'>
//                     Sent On:{' '}
//                     <small className='text-muted'>
//                       <FaRegCalendarAlt className='mx-1 mb-1' />
//                       {format(sms.createdAt, 'MMMM dd, yyyy hh:mm a')}
//                     </small>
//                     <Button
//                       className='btn-sm'
//                       variant='danger'
//                       onClick={() => handleShowModal(sms._id)}
//                     >
//                       <FaTrashAlt />
//                     </Button>
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Col>
//             ))}
//           </Row>
//           <DeleteMessageModal
//             show={showModal}
//             handleConfirm={handleDelete}
//             handleClose={handleCloseModal}
//           />
//         </Container>
//       )}
//     </>
//   )
// }

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row, Card, ListGroup, Button, Container } from 'react-bootstrap'
import { FaRegCalendarAlt, FaTrashAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { readMessages, deleteMessage } from '../slices/messageSlice'
import Spinner from '../components/Spinner'
import DeleteMessageModal from '../components/DeleteMessageModel'

export default function ReadMessageScreen() {
  const dispatch = useDispatch()
  const { msg } = useSelector(state => state.messages)
  const [showModal, setShowModal] = useState(false)
  const [msgId, setMsgId] = useState(null)

  const handleCloseModal = () => {
    setShowModal(false)
    setMsgId(null)
  }
  const handleShowModal = msgId => {
    setMsgId(msgId)
    setShowModal(true)
  }

  useEffect(() => {
    dispatch(readMessages())
  }, [dispatch])

  const handleDelete = async () => {
    if (msgId) {
      await dispatch(deleteMessage(msgId))
      await dispatch(readMessages())
      handleCloseModal()
    }
  }

  return (
    <>
      {!msg ? (
        <Spinner />
      ) : msg.length === 0 ? (
        <h2 className='fw-bold text-center mt-5'>No Messages to read.</h2>
      ) : (
        <Container>
          <h2 className='fw-bold text-center mb-4'>Messages</h2>
          <Row className='g-4'>
            {msg.map(sms => (
              <Col lg={4} md={6} key={sms._id}>
                <Card className='shadow-sm h-100'>
                  <Card.Body>
                    <Card.Title className='mb-2 fw-bold'>
                      {sms.name} - {sms.email}
                    </Card.Title>
                    <Card.Subtitle className='text-muted mb-3'>
                      Phone: {sms.phone}
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>Message:</strong> {sms.message}
                    </Card.Text>
                    <Card.Text>
                      <strong>Appointment Date:</strong>{' '}
                      {format(new Date(sms.date), 'MMMM dd, yyyy hh:mm a')}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup variant='flush'>
                    <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                      <span className='text-muted'>
                        <FaRegCalendarAlt className='mx-1' />
                        Sent On:{' '}
                        {format(
                          new Date(sms.createdAt),
                          'MMMM dd, yyyy hh:mm a'
                        )}
                      </span>
                      <Button
                        className='btn-sm'
                        variant='danger'
                        onClick={() => handleShowModal(sms._id)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            ))}
          </Row>
          <DeleteMessageModal
            show={showModal}
            handleConfirm={handleDelete}
            handleClose={handleCloseModal}
          />
        </Container>
      )}
    </>
  )
}
