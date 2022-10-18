import React, {useCallback, useEffect, useRef, useState} from 'react';
import { dataSlider } from '../../constant/dataSlider';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slideRef = useRef<HTMLDivElement>(null);
    
    const nextSlide = useCallback(() => {
        let currentIndex = currentSlide + 1 < dataSlider.length
            ? currentSlide + 1 : 0;
        
        if(slideRef.current) {
            slideRef.current.style.transform = `translateX(${-100 * currentIndex}vw)`;
        };
        
        setCurrentSlide(currentIndex);
    }, [currentSlide]);

    const preSlide = () => {
        let currentIndex = currentSlide - 1 >= 0
            ? currentSlide - 1 : dataSlider.length - 1;

        if(slideRef.current) {
            slideRef.current.style.transform = `translateX(${-100 * currentIndex}vw)`;
        };
        
        setCurrentSlide(currentIndex);
    };

    useEffect(()=> {
        let timeout = setInterval(()=> {
            nextSlide();
        }, 7000);
        
        return () => {
            clearInterval(timeout)
        }
    }, [nextSlide])

    return <>
        <div className="home-slide">
            <div className="home-slide__container">
                <div className="home-slide__container_wrap" ref={slideRef}>
                    {
                        dataSlider.map((data, i) => (
                            <div className="home-slide__container_wrap_item" key={i}>
                                <a href="/">
                                    <img src={data.img} alt="" />
                                </a>
                            </div>
                        ))
                    }
                </div>

                <div className="home-slide__container_next" onClick={nextSlide}>
                    <FiArrowRight color='white' size={26} />
                </div>
                <div className="home-slide__container_pre" onClick = {preSlide}>
                    <FiArrowLeft color='white' size={26} />
                </div>
            </div>

            <div className="home-slide__form">
                <form action="">
                    <h2>ĐẶT LỊCH GIỮ CHỖ CHỈ 30 GIÂY</h2>
                    <p>Cắt xong trả tiền, hủy lịch không sao</p>
                    <div>
                        <input type="tel" name="" id="" placeholder="Nhập SĐT để đặt lịch !!!" />
                        <button>ĐẶT LỊCH NGAY</button>
                    </div>
                </form>
            </div>

        </div>
    </>
};

export default Slider;