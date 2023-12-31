import { useState } from 'react';
import mainImage from './assets/mainimage.png'
import video from './assets/Video.svg'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Content = () => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    console.log('hi')
    setModalIsOpen(true);
  };
  console.log(modalIsOpen)
  const closeModal = () => {
    setModalIsOpen(false);
  };
    return(
        <>
        <div className='contentdata'>
            <div className='flex-1'>
            <div className="contentbox">
                <span className="text color-dark font-size-40 normal capitalize line-height-60">quick & reliable </span>
                <span className="text color-red font-size-48 bold capitalize line-height-72">warehousing </span>
                <span className="text color-red font-size-48 bold lowercase line-height-72">and</span>
                <span className="text color-red font-size-48 bold capitalize line-height-72"> logistics </span>
                <span className="text color-dark font-size-40 normal capitalize line-height-60">solution</span>
                <span className="text color-dark font-size-40 bold capitalize line-height-60">.</span>
                <div className="text-container">
                ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint
            </div>
            </div>
            

            <div>
            <div className="outer-container">
                <div className="button-container">
                    <div className="join-button-text">Join Now</div>
                </div>
                <div className="icon-container">
                    <div className="icon-video"onClick={openModal}>
                    
                        <img className="icon-image" src={video} alt="Demo Icon" />
                    </div>
                    
                    <div className="demo-text">Play Demo</div>
                </div>
                </div>

            </div>



                
        </div>
        <div className='flex-1 '>
            <img src={mainImage}
            alt='mainImage'
            className='image'
            />

        </div>
        </div>
        <Modal
        show={modalIsOpen}
        onHide={closeModal}
        contentLabel="YouTube Video Modal"
      >
        {/* Embed your YouTube video here */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KjMybBUEqR0"
          title="YouTube Video"
        //   frameBorder="0"
          allowFullScreen
        ></iframe>

        {/* Button to close the modal */}
        {/* <button onClick={closeModal}>Close Video</button> */}
      </Modal>
        </>
    )
}

export default Content