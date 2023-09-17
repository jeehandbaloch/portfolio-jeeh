import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xfbxmgk', 'template_jpozh6h', form.current, 'DPzsp3o7TiGH47AXB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
  return (
    <>
        <div className="yellow"/>
        <div className="container-fluid bg-blacki py-5" id="contact">
            <div className="row">
                <h2 className="text-center text-white pb-4 pt-5">Contact Form</h2>
                <div className="col-md-6 offset-md-3 bg-dark p-5">


     <form ref={form} onSubmit={sendEmail}>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label text-white" required>Name</label>
  <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Your Name e.g John Doe"/>
</div>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label text-white" required>Email address</label>
  <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label text-white" required>Message</label>
  <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
       <div className="text-center">
       <button type='submit' className="btn btn-warning w-50 fw-bold ">Send</button>
       </div>
       </form>

                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </>
  )
}

export default Contact
