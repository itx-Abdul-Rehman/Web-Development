import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Parallax]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        scrollbar={{draggable:true}}
        loop={true}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>

      </Swiper>

      <SwiperSlide>
        <div className="parallax-slide" data-swiper-parallax="-23%">
          <h2>Slide with Parallax</h2>
          <h2>Slide with Parallax</h2>
        </div>
      </SwiperSlide>

    </>
  )
}

export default App
