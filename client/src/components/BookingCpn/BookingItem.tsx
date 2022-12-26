import React from 'react';

interface IInfor {
    salon : string;
    services : (string | number)[];
    time : string;
}

type Tfun =  () => void;

interface IBookItem {
    children ?: React.ReactNode;
    title : string;
    botContent : string;
    botImg : string;
    containText : string;
    containIcon : string;
    textWarning ?: string;
    fAnimate : (type : string) => string;
    infor : IInfor;
    funcContain : () => void | Tfun;
    setModalTime ?: React.Dispatch<React.SetStateAction<boolean>>;
    modalTime ?: boolean;
    type : string;
};
interface IInfor {
    salon : string;
    services : (string | number)[];
    time : string;
}

const BookItem : React.FC<IBookItem> = ( {
        children, botContent, botImg, containIcon, containText, title, textWarning,
        funcContain, setModalTime, modalTime, fAnimate, type, infor
    } ) => {

    const checkBot = () : string => {    

        if(!infor[type as keyof IInfor] && type === "salon") return "--active";
        else if(infor.salon && infor[type as keyof IInfor].length <= 0 && type === "services") return "--active";
        else if(infor.salon && infor.services.length > 0 && type === "time" ) return "--active";
 
        return "";
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
            <div className="booking-body__box_contain" onClick={funcContain}>
                <div className="icon">
                    <img src={containIcon} alt="icon calendar" />
                </div>
                <div className="text box-1">{containText}</div>
                <div className={`icon-close ${type === "time" && modalTime ? "rotate" : ""}`}>
                    <img src="https://30shine.com/static/media/caretRight.b0d191b3.svg" alt="icon arrow right" />
                </div>

            {
                type === "time" ? (
                    <div className={`list-timing ${ modalTime ? "show" : "hidden"}`}>
                        <div className="list-timing-item">
                            <div className="list-timing-item-contain">
                                <div className="date">hôm nay, 16/12/2022</div>
                                <div className="date-text normal">Ngày thường</div>
                            </div>
                        </div>
                        <div className="list-timing-item">
                        <div className="list-timing-item-contain">
                                <div className="date">hôm nay, 16/12/2022</div>
                                <div className="date-text important">Ngày thường</div>
                            </div>
                        </div>
                        <div className="list-timing-item">
                        <div className="list-timing-item-contain">
                                <div className="date">hôm nay, 16/12/2022</div>
                                <div className="date-text normal">Ngày thường</div>
                            </div>
                        </div>
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