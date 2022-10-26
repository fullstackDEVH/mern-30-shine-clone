import React from 'react';

const Booking = () => {
    return (
        <div className="booking">
            <div className="booking-contain">
                <div className="booking-header">
                    <span>Đặt lịch giữ chỗ</span>
                </div>
                <div className="booking-body">
                    <div className="booking-body__box" id="box-salon">
                        <div className="booking-body__box_title">
                            1. Chọn salon
                        </div>
                        <div className="booking-body__box_bot">
                            <img src="" alt="" />
                            <div className="content">
                                <span>Đầu tiên anh  chọn “Tìm salon gần anh” ở ngay bên dưới để tìm Salon thuận tiện nhất nhé!</span>
                            </div>
                        </div>
                        <div className="booking-body__box_contain">
                            <div className="icon">X</div>
                            <div className="text">Xem tất cả salon </div>
                            <div className="icon-close">x</div>
                        </div>
                        <div className="text-warning">Mời anh chọn salon !!</div>
                    </div>
                    <div className="booking-body__box" id="box-service">

                    </div>
                    <div className="booking-body__box" id="box-time">

                    </div>
                </div>
                <div className="booking-fixed">
                    <div className="booking-fixed__contain">
                        <div className="booking-fixed__contain_btn">
                            Hoàn tất
                        </div>
                        <span>Cắt xong trả tiền, huỷ lịch không sao</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Booking;