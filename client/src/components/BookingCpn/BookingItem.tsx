import React, { useState } from 'react';
import { IBooking, IInfor } from '../../interface/booking';


interface IDay {
    day: string | undefined;
    value: string | undefined;
}

interface IBookItem {
    children ?: React.ReactNode;
    title : string;
    botContent : string;
    botImg : string;
    containText : string | IDay;
    containIcon : string;
    textWarning ?: string;
    fAnimate : (type : string) => string;
    infor : IInfor;
    funcContain : () => void;
    setModalTime ?: React.Dispatch<React.SetStateAction<boolean>>;
    modalTime ?: boolean;
    type : string;
    scheduleOfWeek ?: IDay[] | undefined
};

const BookItem : React.FC<IBookItem> = ( {
        children, botContent, botImg, containIcon, containText, title, textWarning,
        funcContain, setModalTime, modalTime, fAnimate, type, infor, scheduleOfWeek
    } ) => {

    const [date, setDate] = useState<IDay>({ day : "", value : ""})

    const checkBot = () : string => {    

        if(!infor[type as keyof IInfor] && type === "salon") return "--active";
        else if(infor.salon && infor[type as keyof IInfor].length <= 0 && type === "services") return "--active";
        else if(infor.salon && infor.services.length > 0 && type === "time" ) return "--active";
 
        return "";
    };

    const getScheduleInDay = (e : React.MouseEvent<HTMLDivElement>) => {
        let target = (e.target as HTMLDivElement);
       
        setDate({
            day : target.dataset.dayDate,
            value : target.dataset.dayTimestamp
        });
    };

    return (
        <div className={`booking-body__box ${fAnimate(type)}`} id={`box-${type}`}>
            <div className="booking-body__box_title">
                {title}
            </div>
            {/* bot */}
            <div className={`booking-body__box_bot ${checkBot()}`}>
                <img src={botImg} alt="bot avatar" />
                <div className="content">
                    <span className="box-2">{botContent}</span>
                </div>
            </div>
            {/* contain */}
            <div className="booking-body__box_contain" onClick={funcContain}  >
                <div className="icon">
                    <img src={containIcon} alt="icon calendar" />
                </div>
                <div className="text box-1">{date?.day ? `${date.day}` : `${containText}`}</div>
                <div className={`icon-close ${type === "time" && modalTime ? "rotate" : ""}`}>
                    <img src="https://30shine.com/static/media/caretRight.b0d191b3.svg" alt="icon arrow right" />
                </div>

            {
                type === "time"  ? (
                    <div className={`list-timing ${ modalTime ? "show" : "hidden"}`}  >
                        {
                            scheduleOfWeek && scheduleOfWeek.length > 0 && scheduleOfWeek.map(item => (
                                <div className="list-timing-item" key={ item.value }>
                                    <div className="list-timing-item-contain" 
                                        data-day-timestamp={item.value}
                                        data-day-date={item.day}
                                        onClick ={getScheduleInDay}
                                    >
                                        <div className="date">{item.day}</div>
                                        <div className="date-text normal">Ngày thường</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
                
                
            </div>
            <div className="text-warning --show">{textWarning}</div>
            {/* children */}

            {
                children
            }
        </div>

    )
};

export default BookItem;