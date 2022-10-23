import React from 'react';
import JourneyItem from './JourneyItem';

const Journey = () => {
    return (
        <div className = "journey">
            <div className="container">
                <div className="journey-title">
                    HÀNH TRÌNH TỎA SÁNG
                </div>
                <div className="journey-subtitle">
                    Quá trình tìm kiếm và hoàn thiện bản thân là bất tận. Mỗi kiểu tóc mới đại diện một tinh thần mới mà người đàn ông luôn hướng đến để tìm thấy phiên bản tốt nhất của chính mình. Hãy cùng lắng nghe những câu chuyện hành trình lột xác dưới đây để tìm thấy niềm cảm hứng đổi mới cho bạn.
                </div>
                <div className="journey-row">
                    <JourneyItem col={6} />
                    <JourneyItem col={6} />

                    <JourneyItem col={3} />

                    <JourneyItem col={3} />

                    <JourneyItem col={3} />

                    <JourneyItem col={3} />

                    <JourneyItem col={3} />

                    <JourneyItem col={3} />

                    <JourneyItem col={3} />

                    <JourneyItem col={3} />


                    
                </div>
            </div>
        </div>
    )
};

export default Journey;