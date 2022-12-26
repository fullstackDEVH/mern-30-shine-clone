import { Swiper, SwiperSlide  } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IInfor {
    salon : string;
    services : (string | number)[];
    time : string;
}

interface IProps {
    infor : IInfor;
}

const TimeSlide : React.FC<IProps> = ({infor}) => {

    const handClickBox = (e : React.MouseEvent<HTMLDivElement>) => {
        let target = (e.target as HTMLDivElement);

        // nên dùng useRef thay thế e.target.closets
        if(target.closest(".time-box-contain__item > .avaiable")) {

            const list = document.querySelectorAll(".time-box-contain__item > .choose");
            list.forEach(item => item.classList.remove("choose"));

            target.classList.add('choose');

            console.log(target.innerText);

        }
    };
    return (
        <>
            {
                    infor?.services.length > 0 ? (
                        <div className="time-box" onClick={handClickBox}>
                        <div className="time-box-contain" style={{overflowX : "hidden"}}>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={10}
                            >
                                {
                                    [1,2,3,4,5,6].map((a,i)=> (
                                        <SwiperSlide key = {i}>
                                            <div className="time-box-contain__item">
                                                <div className="avaiable">7h00</div>
                                                <div>7h30</div>
                                                <div className ="unavaiable">7h45</div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    ) : null
                }
        </>
    )
};

export default TimeSlide;