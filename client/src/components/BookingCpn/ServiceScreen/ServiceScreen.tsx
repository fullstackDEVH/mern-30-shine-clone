import React, {FC} from 'react';
import ServiceListItem from './ServiceListItem';

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
                        <ServiceListItem />
                        <ServiceListItem />
                        <ServiceListItem />
                        <ServiceListItem />


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