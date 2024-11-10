import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Swiper({score, center=false,children}) {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 3 ,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: score,
            slidesToSlide: 1,
            partialVisibilityGutter: 30
        }
    };
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={!{center} ? true: false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl={false}
            minimumTouchDrag={80}
            partialVisible={center}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable>
            {children}
        </Carousel>

    )
}

