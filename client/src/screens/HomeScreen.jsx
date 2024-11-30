import { Carousel } from 'react-bootstrap'

export default function HomeScreen() {
  const slides = [
    {
      image: 'service1.jpg',
      caption: 'Rejuvenate with Ayurveda',
      description:
        'Experience the ancient healing techniques of Ayurveda for complete relaxation and balance.'
    },
    {
      image: 'service2.jpg',
      caption: 'Luxurious Massage Therapy',
      description:
        'Indulge in our premium massage services designed to melt away stress and tension.'
    },
    {
      image: 'service3.jpg',
      caption: 'Blissful Spa Treatments',
      description:
        'Discover ultimate relaxation with our tailored spa treatments for mind and body.'
    },
    {
      image: 'blog3.jpg',
      caption: 'A Sanctuary for Wellness',
      description:
        'Step into a haven of tranquility and holistic wellness at our spa.'
    },
    {
      image: 'blog2.jpg',
      caption: 'Relax and Revive',
      description:
        'Unwind with our curated selection of spa services, crafted just for you.'
    },
    {
      image: 'blog1.jpg',
      caption: 'Restore Your Inner Peace',
      description:
        'Let go of daily stress with our soothing treatments in a serene environment.'
    }
  ]

  return (
    <Carousel>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={`/images/${slide.image}`}
            className='d-block w-100 carousel-image'
            alt={`Slide ${idx + 1}`}
          />
          <Carousel.Caption className='carousel-caption-bg'>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
