import React, {FC, useState, useEffect, useCallback} from 'react';
import { IInfor } from '../../../interface/booking';

import BookItem from '../BookingItem';
import ExtensionBook from '../ExtensionBook';
import TimeSlide from '../TimeSlide';


import moment from 'moment'
import 'moment/locale/vi'

interface IProps {
    infor : IInfor;
    handleStep : (step : number) => void ;
};

interface IDay {
    day: string;
    value: string;
}

const MainScreen: FC<IProps> = ({ infor, handleStep }) => {

    const [modalTime, setModalTime] = useState<boolean>(false);
    const [arrDays, setArrDays] = useState<IDay[]>([]);

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

    const getSchedule = useCallback(() => {
        let daysOfWeek = [];
    
        for(let i = 0 ; i < 5 ; i++) {
            let day = moment(new Date()).add(i, 'days').format('dddd, DD/MM');
            let valueTimestamp = moment(new Date()).add(i, 'days').startOf('day').unix();
    
            daysOfWeek.push({
                day,
                value : ""+valueTimestamp
            });
        }
        setArrDays(daysOfWeek);
    }, []);

    const handleBoxContain = () => {

    };

    const showModalTime = () => {
       setModalTime(pre => !pre)
    };

    useEffect(() => {
        getSchedule();
    }, []);

    // custom array main-screen
    return (
        <div className="booking-body main-screen">
            {/* salon */}
            <BookItem 
                title="1. Chọn salon"
                botImg="https://30shine.com/static/media/bot_avatar_1654_1.26e1da41.jpg"
                botContent="Đầu tiên anh  chọn “Tìm salon gần anh” ở ngay bên dưới để tìm Salon thuận tiện nhất nhé!"
                containIcon="https://30shine.com/static/media/homeOutline.76facfa5.svg"
                containText="Xem tất cả salon"
                textWarning="Mời anh chọn salon !!"
                fAnimate = {animate}
                infor={infor}
                type="salon"
                funcContain={() => handleStep(1)}
            />

            {/* services */}
            <BookItem 
                title="2. Chọn dịch vụ"
                botImg="https://30shine.com/static/media/bot_avatar_1654_1.26e1da41.jpg"
                botContent="Anh chọn trước dịch vụ bên dưới để chúng em chuẩn bị chu đáo ạ!!"
                containIcon="https://30shine.com/static/media/service.3a62b101.svg"
                containText="Xem tất cả dịch vụ hấp dẫn"
                textWarning="Mời anh chọn dịch vụ!!"
                fAnimate = {animate}
                infor={infor}
                type="services"
                funcContain={() => handleStep(2)}
            />

            {/* time */}
            <BookItem 
                title="3. Chọn ngày, giờ & stylist"
                botImg="https://30shine.com/static/media/bot_avatar_1654_1.26e1da41.jpg"
                botContent="Anh hãy chọn thời gian cắt ở ngay bên dưới nhé!"
                containIcon="https://30shine.com/static/media/calendar-2.3c77d299.svg"
                containText={arrDays.length > 0 ? arrDays[0].day : ''}
                // containText={''}

                textWarning="Mời anh chọn thời gian cắt ạ!!"
                fAnimate = {animate}
                infor={infor}
                type="time"
                scheduleOfWeek={arrDays.length > 0 ? arrDays : []}
                funcContain={() => showModalTime()}
                modalTime = {modalTime}
            >
                <TimeSlide infor = {infor} />               
                <ExtensionBook infor = {infor} />
            </BookItem>              
        </div>
    )
};

export default MainScreen;