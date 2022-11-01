import React, { useState } from 'react';
import MainScreen from './MainScreen/MainScreen';
import SalonScreen from './SalonScreen/SalonScreen';
import ServicesScreen from './ServiceScreen/ServiceScreen';

interface IInfor {
    salon : string;
    services : (string | number)[];
    time : string;
}

const Booking = () => {
    const [step, setStep] = useState<number>(0);
    const [infor, setInfor] = useState<IInfor>({
        salon : "",
        services : [],
        time : ""
    });

    const handleStep = (step : number) => {
        setStep(step);
    };

    return (
        <div className="booking">
            <div className="booking-contain">
                <div className="booking-header">
                    <span>
                        {
                            step === 0 ? "Đặt lịch giữ chỗ" :
                            (
                                step === 1 ? "Chọn Salon" : "Chọn dịch vụ"
                            )
                        }
                    </span>
                    {
                        step === 1 || step === 2 ?  
                            <img 
                                src="https://30shine.com/static/media/arrowLeft.3e6be3da.svg" 
                                alt="icon arrow left" 
                                onClick = {()=>setStep(0)} 
                            /> : null
                    }
                </div>
                {
                    step === 0 ? <MainScreen handleStep={handleStep} infor={infor} /> : 
                        (
                            step === 1 ? <SalonScreen /> : <ServicesScreen />
                        )
                }
                {
                    step === 0 || step ===2 ? (
                        <div className="booking-fixed">
                            <div className="booking-fixed__contain">
                                <div className={`booking-fixed__contain_btn ${infor.salon && infor.time && "--done"}`}>
                                    Hoàn tất
                                </div>
                                <span>Cắt xong trả tiền, huỷ lịch không sao</span>
                            </div>
                        </div>
                    ) : null
                }
               
            </div>
        </div>
    )
};

export default Booking;