import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Para las flechas de navegación
import 'swiper/css/pagination'; // Para la paginación
import { Navigation, Pagination, Autoplay } from 'swiper';

function Carousel() {
    return (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Habilita los módulos necesarios
            spaceBetween={10} // Espacio entre las imágenes
            slidesPerView={3} // Número de imágenes visibles en la vista
            loop={true} // Habilita el loop (infinito)
            autoplay={{ delay: 3000 }} // Autoplay cada 3 segundos
            navigation={true} // Habilita las flechas de navegación
           // pagination={{ clickable: true }} // Habilita la paginación con puntos
            className="relative" // Clase para contener el carousel
          >
        <SwiperSlide>
        <div className="flex justify-center items-center w-full h-full">
          <img
            src='src/assets/imagen1.jpg'
            alt='Imagen 1'
            className="w-[200x] h-[400px] object-cover rounded-lg"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center w-full h-full">
          <img
            src='src/assets/imagen2.jpg'
            alt='Imagen 2'
            className="w-[200x] h-[400px] object-cover rounded-lg"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center w-full h-full">
          <img
            src='src/assets/imagen3.jpg'
            alt='Imagen 3'
            className="w-[200x] h-[400px] object-cover rounded-lg"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center w-full h-full">
          <img
            src='src/assets/imagen4.jpg'
            alt='Imagen 4'
            className="w-[200x] h-[400px] object-cover rounded-lg"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center w-full h-full">
          <img
            src='src/assets/imagen5.jpg'
            alt='Imagen 5'
            className="w-[200x] h-[400px] object-cover rounded-lg"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center w-full h-full">
          <img
            src='src/assets/imagen6.jpg'
            alt='Imagen 6'
            className="w-[200x] h-[400px] object-cover rounded-lg"
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center w-full h-full">
          <img
            src='src/assets/imagen7.jpg'
            alt='Imagen 7'
            className="w-[200x] h-[400px] object-cover rounded-lg"
          />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
