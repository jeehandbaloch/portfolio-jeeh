import '../styles/Home.css'
import Image from '../images/photo.png'
import {useTypewriter} from 'react-simple-typewriter';
import CountUp from 'react-countup'
import Testimonial from './Testimonial';
// import Navbar from './Navbar'


const Home = () => {
const [typeEffect] = useTypewriter({
    words: ['Front End', 'Web Developer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
})
    
    return (
        <>
      <div className="container-fluid bg-blacki" >
        <div className="row d-flex justify-content-between">
            <div className="col-lg-6 col text-white bg-dansger mt-main-txt">
                <div className="text-center">
                <h1 className='heading'>Hi, I am </h1>
               <h1 className='heading-main'>Jeehand Baloch</h1>
               <h1 className='heading-main-effect'>{typeEffect}</h1>
                </div>
                <div className="d-flex align-items-center bg-white rounded-3 text-cen m-count" >
                    <div className="d-flex flex-column ">
                        <span className='d-flex align-items-center'>
                        <CountUp start={0} end={6900} durations={14} className='count'/>
                        <span className='m-0 p-0 fs-2 text-primary '>+</span>
                        </span>
                          <p className='bg-dark text-white py-2 px-1 rounded-3'>Projects Delivered</p>
                    </div>
                    <div className="d-flex flex-column mx-4">
                        <span className='d-flex align-items-center'>
                        <CountUp start={0} end={2000} durations={14} className='count'/>
                        <span className='m-0 p-0 fs-2 text-primary '>+</span>
                        </span>
                          <p className='bg-dark text-white py-2 px-1 rounded-3'>Happy Customers</p>
                    </div>
                    <div className="d-flex flex-column">
                        <span className='d-flex align-items-center'>
                        <CountUp start={0} end={34} durations={14} className='count'/>
                        <span className='m-0 p-0 fs-2 text-primary '>+</span>
                        </span>
                          <p className='bg-dark text-white py-2 px-1 rounded-3'>Awards Won</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col bg-blacki mb-0 pb-0">
                <img src={Image} alt="" className='m-0'/>
            </div>
        </div>
      </div>
      <Testimonial />
      </>
  )
}

export default Home
