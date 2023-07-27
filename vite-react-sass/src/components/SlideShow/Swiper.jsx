import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';



register();

const MyComponent = ({ pictures }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination
      pagination-type='fraction'
      id="slide-show"
      loop ="true"

    >
      {pictures.map((e, index)=> (
              <swiper-slide key={index} ><img src={e} alt={'Slide-' + {index}} className="slide-image"/></swiper-slide>

      ))}
    </swiper-container>
  );
};

export default MyComponent;