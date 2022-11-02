import React, {FC} from 'react';

interface IProps {

};

const ServicesScreen: FC<IProps> = ({ }) => {
    return (
        <div className="service-screen">
            <div className="service-screen-categoryies" >

            </div>
            <div className="salon-box-switch">
                <div className="box-switch">
                    <span>
                        Có chỗ đậu ô tô 
                        <span> (Có thể mất phí)</span>
                    </span>
                </div>
                <input type="checkbox" ></input>
            </div>

            <div className={`booking-body__box_bot --active`}>
                <img src="https://30shine.com/static/media/bot_avatar_1654_1.26e1da41.jpg" alt="bot avatar" />
                <div className="content">
                    <span className="box-3">Ngoài gói Shine Combo 10 bước nổi tiếng, chúng em còn có rất nhiều gói Chăm sóc da, Lấy ráy tai và Uốn/Nhuộm dùng kèm rất tốt nữa đó!</span>
                </div>
            </div>
        </div>
    )
};

export default ServicesScreen;