import React, { useState } from 'react';

interface IInfor {
    salon : string;
    services : (string | number)[];
    time : string;
}

const Booking = () => {
    const [step, setStep] = useState<number>(0);
    const [infor, setInfor] = useState<IInfor>({
        salon : "1",
        services : [3],
        time : "2"
    });


    const animate = (type : string) : string => {
        switch(type) {
            case "salon" : 
                if(!infor.salon) return "--active";
                return "--done";
            case "services" :
                if(!infor.salon) return "";
                if(infor.services.length < 1) return "--active";
                return "--done"
            case "time" :
                if(!infor.salon|| infor.services.length < 1) return "";
                if(!infor.time) return "--active";
                return "--done"
            
            default : 
                return "";
        }
    };

    return (
        <div className="booking">
            <div className="booking-contain">
                <div className="booking-header">
                    <span>Đặt lịch giữ chỗ</span>
                </div>
                <div className="booking-body">
                    {/* salon */}
                    <div className={`booking-body__box ${animate("salon")}`} id="box-salon">
                        <div className="booking-body__box_title">
                            1. Chọn salon
                        </div>
                        <div className={`booking-body__box_bot ${!infor.salon && "--active"}`}>
                            <img src="https://30shine.com/static/media/bot_avatar_1654_1.26e1da41.jpg" alt="bot avatar" />
                            <div className="content">
                                <span className="box-2">Đầu tiên anh  chọn “Tìm salon gần anh” ở ngay bên dưới để tìm Salon thuận tiện nhất nhé!</span>
                            </div>
                        </div>
                        <div className="booking-body__box_contain">
                            <div className="icon">
                                <img src="https://30shine.com/static/media/homeOutline.76facfa5.svg" alt="icon home" />
                            </div>
                            <div className="text box-1">Xem tất cả salon </div>
                            <div className="icon-close">
                                <img src="https://30shine.com/static/media/caretRight.b0d191b3.svg" alt="icon arrow right" />
                            </div>
                        </div>
                        <div className="text-warning">Mời anh chọn salon !!</div>
                    </div>

                    {/* services */}
                    <div className={`booking-body__box ${animate("services")}`} id="box-service">
                        <div className="booking-body__box_title">
                            2. Chọn dịch vụ
                        </div>
                        <div className={`booking-body__box_bot ${infor.salon && infor.services.length < 1 && "--active"}`}>
                            <img src="https://30shine.com/static/media/bot_avatar_1654_1.26e1da41.jpg" alt="bot avatar" />
                            <div className="content">
                                <span className="box-2">Anh chọn trước dịch vụ bên dưới để chúng em chuẩn bị chu đáo ạ</span>
                            </div>
                        </div>
                        <div className="booking-body__box_contain">
                            <div className="icon">
                                <img src="https://30shine.com/static/media/service.3a62b101.svg" alt="icon keo" />
                            </div>
                            <div className="text box-1">Xem tất cả dịch vụ hấp dẫn</div>
                            <div className="icon-close">
                                <img src="https://30shine.com/static/media/caretRight.b0d191b3.svg" alt="icon arrow right" />
                            </div>
                        </div>
                        <div className="text-warning">Mời anh chọn dịch vụ ạ !!</div>
                    </div>
                    
                    {/* time */}
                    <div className={`booking-body__box ${animate("time")}`} id="box-time">
                        <div className="booking-body__box_title">
                            3. Chọn ngày, giờ & stylist
                        </div>
                        <div className={`booking-body__box_bot ${infor.salon && infor.services.length > 0 && "--active"}`}>
                            <img src="https://30shine.com/static/media/bot_avatar_1654_1.26e1da41.jpg" alt="bot avatar" />
                            <div className="content">
                                <span className="box-2">Đầu tiên anh  chọn “Tìm salon gần anh” ở ngay bên dưới để tìm Salon thuận tiện nhất nhé!</span>
                            </div>
                        </div>
                        <div className="booking-body__box_contain">
                            <div className="icon">
                                <img src="https://30shine.com/static/media/calendar-2.3c77d299.svg" alt="icon calendar" />
                            </div>
                            <div className="text box-1">Hôm nay, 28/10 </div>
                            <div className="icon-close">
                                <img src="https://30shine.com/static/media/caretRight.b0d191b3.svg" alt="icon arrow right" />
                            </div>
                        </div>
                        <div className="text-warning">Mời anh chọn thời gian cắt !!</div>
                    </div>
                </div>
                <div className="booking-fixed">
                    <div className="booking-fixed__contain">
                        <div className={`booking-fixed__contain_btn ${infor.salon && infor.time && "--done"}`}>
                            Hoàn tất
                        </div>
                        <span>Cắt xong trả tiền, huỷ lịch không sao</span>
                    </div>
                </div>
                <div className="booking-extension">

                </div>
            </div>
        </div>
    )
};

export default Booking;