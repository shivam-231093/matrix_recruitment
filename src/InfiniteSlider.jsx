import React from 'react'

function InfiniteSlider() {
  return (
    <div >
    <div className=' w-full h-[60vh] mb-16 inline-flex overflow-y-hidden overflow-x-hidden '>
        <div className=' text-[8vw] text-stroke font-sans tracking-tighter font-bold  inline-flex gap-8 mr-8 animate-slideImg'> 
          <img className='w-full bg-white max-h-[60vh] ' src="./1.JPG" alt="" />
          <img className='w-full bg-white max-h-[60vh] ' src="./14.png" alt="" />
          <img className='w-full bg-white max-h-[60vh] ' src="./2.JPG" alt="" />
        
          <img className='w-full object-cover bg-white max-h-[60vh] ' src="./10.png" alt="" />  
          <img className='w-full bg-white max-h-[60vh] ' src="./5.JPG" alt="" />
          
          <img className='w-full bg-white max-h-[60vh] ' src="./15.png" alt="" />
          <img className='w-full bg-white max-h-[60vh] ' src="./7.JPG" alt="" />
          <img className='w-full bg-white max-h-[60vh] ' src="./8.JPG" alt="" />  
          <img className='w-full bg-white max-h-[60vh] ' src="./9.png" alt="" />  
          <img className='w-full bg-white max-h-[60vh] ' src="./11.png" alt="" />
          <img className='w-full bg-white max-h-[60vh] ' src="./12.png" alt="" />
          <img className='w-full bg-white max-h-[60vh] ' src="./13.png" alt="" />
          <img className='w-full bg-white max-h-[60vh] ' src="./16.png" alt="" />
        </div>
    </div>
    </div>
  )
}

export default InfiniteSlider




// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// const image=[]

// export default function App() {
//   return (
//     <>
//     <div className='h-[60vh] transition duration-[9s]  ease-in-out'>

//       <Swiper
//         spaceBetween={1}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         speed={400} // Adjust speed for smooth transitions (default is 300)
//         loop={true}
//         modules={[Autoplay]}
//         className="mySwiper  "
//         >
//         <SwiperSlide>
//         <div className=' text-[8vw] text-stroke font-sans tracking-tighter font-bold  inline-flex gap-8 mr-8'> 
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\1.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\2.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\3.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\4.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\5.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\6.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\7.JPG" alt="" />
          
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className=' text-[8vw] text-stroke font-sans tracking-tighter font-bold  inline-flex gap-8 mr-8 animate-slideImg'> 
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\1.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\2.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\3.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\4.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\5.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\6.JPG" alt="" />
//           <img className='w-full bg-white max-h-[60vh] ' src="src\slider\7.JPG" alt="" />
          
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//         </div>
//     </>
//   );
// }
