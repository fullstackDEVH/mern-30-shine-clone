import React, {FC} from 'react';

interface IProps {

};

const ServicesScreen: FC<IProps> = ({ }) => {
    return (
        <div className="service-screen">
            <div className="service-screen-categoryies" >
                <div>Cắt gội massage</div>
                <div>Combo chăm sóc</div>
                <div>Uốn hàn quốc</div>
            </div>
            <div className="service-box-siwtch">
                <span>Dịch vụ đã chọn: 0 dịch vụ</span>
                <input type="checkbox" className="switch-btn"></input>
            </div>

            <div className="service-bot">
                <div className={`booking-body__box_bot --active`}>
                    <img src="https://30shine.com/static/media/bot_avatar_1654_1.26e1da41.jpg" alt="bot avatar" />
                    <div className="content">
                        <span className="box-3">Ngoài gói Shine Combo 10 bước nổi tiếng, chúng em còn có rất nhiều gói Chăm sóc da, Lấy ráy tai và Uốn/Nhuộm dùng kèm rất tốt nữa đó!</span>
                    </div>
                </div>
            </div>

            <div id="category-1">
                <div className="service">
                    <div className="service-category">
                        <div className="service-category-name">CẮT GỘI MASSAGE</div>
                        <span>7 dịch vụ</span>
                    </div>
                    <div className="service-list">
                        <div className="service-list-item">
                            <div className="service-media">
                                <img src="	https://s3.ap-southeast-1.amazonaws.com/storage.30shine.com/service/combo_booking/638.jpg" alt="img service" />
                            </div>
                            <div className="service-content">
                                <div className="service-content-title">Combo Cắt gội VIP (all dịch vụ chăm sóc)</div>
                                <div className="service-content-desc box-4">Combo cắt gội chuyên nghiệp, chỉ phục vụ 15 khách/ngày</div>
                                <div className="service-content-price">150K</div>
                                <div className="service-content-btn">
                                    <img src="https://30shine.com/static/media/checked.ae42306a.svg" alt="icon tick" />
                                    Chọn
                                </div>
                            </div>
                        </div>

                        <div className="service-list-item">
                            <div className="service-media">
                                <img src="	https://s3.ap-southeast-1.amazonaws.com/storage.30shine.com/service/combo_booking/638.jpg" alt="img service" />
                            </div>
                            <div className="service-content">
                                <div className="service-content-title">Combo Cắt gội VIP (all dịch vụ chăm sóc)</div>
                                <div className="service-content-desc">Phòng gội VIP nhất từ trước đến giờ!!!
                                    Thư giãn massage bằng đá nóng núi lửa Himalaya giảm tê cứng, căng cơ
                                    Gội dưỡng sinh thẩm thấu các dưỡng chất bảo vệ da đầu
                                    Cắt xả và vuốt sáp tạo kiểu bằng gôm sáp Glanzen giữ nếp tóc lâu
                                </div>
                                <div className="service-content-price">150K</div>
                                <div className="service-content-btn">
                                    <img src="https://30shine.com/static/media/checked.ae42306a.svg" alt="icon tick" />
                                    Chọn
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="category-2">

            </div>
            <div id="category-3">

            </div>
        </div>
    )
};

export default ServicesScreen;