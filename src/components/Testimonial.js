import { useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import Contact from './Contact';
// import Navbar from './Navbar';

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return ( <>
    <div className="yellow"/>
         {/* <main> */}
      <section className='container-fluid bg-blacki py-5' id='testimonial'>
        <div className='title'>
          <h2 className='text-white'>testimonials</h2>
          {/* <div className='underline'></div> */}
        </div>
        {/* <Review /> */}
        <div className="row">
        <div className="col-md-4 offset-md-4 bg-warning rounded-3">
        <article className='text-center bg-white py-5 px-5'>
      <div className='img-container rounded-circle '>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

    </article>
        </div>
     </div>
      </section>
    {/* </main> */}
    <Contact />
    </>
  )
}

export default Testimonial
