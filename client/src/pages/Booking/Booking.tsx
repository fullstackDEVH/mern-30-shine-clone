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

                        </div>
                        <div className="booking-body__box_contain">
                            <div className="icon"></div>
                            <div className="text"></div>
                            <div className="icon-close"></div>
                        </div>
                    </div>
                    <div className="booking-body__box" id="box-service">

                    </div>
                    <div className="booking-body__box" id="box-time">

                    </div>
                </div>
                <div className="booking-fixed">

                </div>
            </div>
        </div>
    )
};

export default Booking;