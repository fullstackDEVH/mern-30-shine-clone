import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainScreen from '../../components/BookingCpn/MainScreen/MainScreen';
import SalonScreen from '../../components/BookingCpn/SalonScreen/SalonScreen';
import ServicesScreen from '../../components/BookingCpn/ServiceScreen/ServiceScreen';
import { IInfor } from '../../interface/booking';

const Booking = () => {
    const [step, setStep] = useState<number>(0);
    const [infor, setInfor] = useState<IInfor>({
        "salon" : "1",
        "services" : [1],
        "time" : "1"
    });

    const navi = useNavigate();

    const handleStep = (step : number) => {

        if(step === 3){
            document.querySelector("#box-time .booking-body__box_contain")?.classList.toggle('show');            
            return;
        }
        setStep(step);
        navi(`/booking?phone=0385151582&step=${step}`);
    };

    return (
        <div className="booking">
            <div className="booking-contain">
                <div className="booking-header">
                    <span>
                        {
                           ["Đặt lịch giữ chỗ", "Chọn Salon", "Chọn dịch vụ"][step]
                        }
                    </span>
                    {
                        step === 1 || step === 2 ?  
                            <img 
                                src="https://30shine.com/static/media/arrowLeft.3e6be3da.svg" 
                                alt="icon arrow left" 
                                onClick = {()=>handleStep(0)} 
                            /> : null
                    }
                </div>
                {
                  [<MainScreen handleStep={handleStep} infor={infor} />,  <SalonScreen />, <ServicesScreen />][step]
                }

                {
                    step === 0 ? 
                        (
                            <div className="booking-fixed">
                                <div className="booking-fixed__contain">
                                    <div className={`booking-fixed__contain_btn ${infor.salon && infor.time && "--done"}`}>
                                        Hoàn tất
                                    </div>
                                    <span>Cắt xong trả tiền, huỷ lịch không sao</span>
                                </div>
                            </div>
                        ) : 
                        ( 
                            step === 2 ? (
                                <div className="booking-fixed">
                                    <div className="booking-fixed__contain">
                                        <div className={`booking-fixed__contain_btn ${infor.salon && infor.time && "--done"}`}>
                                            Chọn dịch vụ
                                        </div>
                                    </div>
                                </div> 
                            ) : null
                        )
                }
               
            </div>
        </div>
    )
};

export default Booking;