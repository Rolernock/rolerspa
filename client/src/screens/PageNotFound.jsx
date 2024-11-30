import { Link } from 'react-router'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function PageNotFound() {
  return (
    <section className='text-center d-flex justify-content-center align-items-center flex-column mt-5'>
      <FaExclamationTriangle className='icon-large mb-4' />
      <h2 className='fw-bold fs-1 mb-4'>404 Page Not Found.</h2>
      <p className='mb-4 fs-1'>This page does not exist</p>
      <Link to='/'>Go Back</Link>
    </section>
  )
}
