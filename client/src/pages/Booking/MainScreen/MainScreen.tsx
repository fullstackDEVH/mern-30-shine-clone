import React, {FC} from 'react';

interface IInfor {
    salon : string;
    services : (string | number)[];
    time : string;
}

interface IProps {
    infor : IInfor;
    handleStep : (step : number) => void ;
};

const MainScreen: FC<IProps> = ({ infor, handleStep }) => {

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
        <div className="booking-body main-screen">
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
                <div className="booking-body__box_contain" onClick={()=> handleStep(1)}>
                    <div className="icon">
                        <img src="https://30shine.com/static/media/homeOutline.76facfa5.svg" alt="icon home" />
                    </div>
                    <div className={`text box-1 ${infor?.salon ? "choose" : ""}`}>Xem tất cả salon </div>
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
                <div className="booking-body__box_contain" onClick={()=> handleStep(2)}>
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
                    <div className="booking-body__box_contain" onClick={()=> handleStep(3)}>
                        <div className="icon">
                            <img src="https://30shine.com/static/media/calendar-2.3c77d299.svg" alt="icon calendar" />
                        </div>
                        <div className="text box-1">Hôm nay, 28/10 </div>
                        <div className="icon-close">
                            <img src="https://30shine.com/static/media/caretRight.b0d191b3.svg" alt="icon arrow right" />
                        </div>
                </div>
                <div className="text-warning">Mời anh chọn thời gian cắt !!</div>   
                        
                {/* extension */}
                {
                    Object.values(infor).filter(i => i.length > 0).length === 3 ? (
                        <div className="extension mt-3">
                            <div className="extension-title">Anh sẽ happy hơn nếu</div>
                            <div className="extension-note mt-1">
                                <div className="extension-note-head">
                                    <img src="https://30shine.com/static/media/icon_note.7f8d920f.svg" alt="icon" />
                                    <span>Yêu cầu đặc biệt</span>
                                </div>
                                <div className="extension-note-input">
                                    <textarea placeholder="VD: Cắt tóc kỹ, gội đầu sạch !!" cols={30} rows={1}></textarea>
                                </div>
                            </div>

                            <div className="extension-advance">
                                <div className="extension-advance-item mt-1">
                                    <div className="extension-header">
                                        <div>
                                            <img src="https://30shine.com/static/media/icon_advice.bc43db00.svg" alt="icon headphone" />
                                            <span>Chụp hình sau khi cắt</span>
                                        </div>
                                        <input className="switch-btn" aria-checked={true} type="checkbox" />
                                    </div>
                                    <p>Anh cho phép các em giới thiệu về chương trình khuyến mãi, dịch vụ tốt nhất dành cho anh</p>
                                </div>

                                <div className="extension-advance-item mt-1">
                                    <div className="extension-header">
                                        <div>
                                            <img src="https://30shine.com/static/media/icon_camera.e875c799.svg" alt="icon camera" />
                                            <span>Yêu cầu tư vấn</span>
                                        </div>
                                        <input className="switch-btn" aria-checked={true} type="checkbox" />
                                    </div>
                                    <p>Anh cho phép chụp hình lưu lại kiểu tóc, để lần sau không phải mô tả lại cho thợ khác</p>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                
            </div>
        </div>
    )
};

export default MainScreen;