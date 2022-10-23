import React, {FC} from 'react';

interface IProps {
 col ?: number;
};

const JourneyItem : FC<IProps> = ({ col }) => {
    return (
        <div className={`journey-row__contain col-${col ? col : 3}`}>
            <div className="journey-col">
                <div className="journey-col__media">
                    <a href="/">
                        <img alt="media" src = "https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-lot-xac-thanh-hot-boy.jpg" />
                    </a>
                </div>
                <div className="journey-col__content">
                    <div className="journey-col__content_tit box-2">
                        Bạn sinh viên IT lột xác thành hot boy vạn người mê
                    </div>
                    <div className="journey-col__content_subtitle box-2">
                        Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất thành công
                    </div>
                    <div className="journey-col__content_tag">
                        <span >435k views</span>
                        <div>
                            <img src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg" alt="icon youtube" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JourneyItem;