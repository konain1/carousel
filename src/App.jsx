import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function App () {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <>
      <div>
      <h1 className='text-[red]'>Carousel</h1>
        <Carousel responsive={responsive}>
          <div className='flex justify-center flex-col items-center border border-black mt-5 sm:w100 '>
            <div className=' flex justify-center '>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHee_tcXBbUdan1Mhbeh9Dubl0MHt_s9H6yA&usqp=CAU'/>
            </div>
            <div>
              <p className='p-5'>hellow orldlfldjfdldlndljdljjfldsjflfjndljlsjd</p>
            </div>
            <button className='border rounded'>Read more....</button>
          </div>
          <div>
          
            <div>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-HVQKodJSNp05wHaXFzUChdY7qtrg1BV7Q&usqp=CAU'/>
            </div>
          </div>
          <div>
          <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCBwFFMihiMi7S5lcfvBEDpy9SrTXYu12d9GpzJYGgSgTmZT4H_EVCMZqsCo7DpiHw1I&usqp=CAU' />
            </div>
          </div>
          <div>
          <div>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdR-rKudmg_si7Ap9lXyM2lz_kOw_dGeccb14jLbEaJlZOjbkfAqCU9neZTwJjyyj2Ejw&usqp=CAU'/>
            </div>
          </div>
        </Carousel>
        ;
      </div>
    </>
  )
}

export default App
