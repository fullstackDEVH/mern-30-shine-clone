import React , {FC } from 'react';

interface IProps {
    title : string;
    banner ?: string;
    list ?: (string | number)[];
    subtitle ?: string;
};

const Service:FC<IProps> = ({ title, banner, list, subtitle}) => {
    return (
    
                <div className="service-block">
                    <div className="service-block__title">
                        {title}
                    </div>
                    {
                        banner && (
                            <div className="service-block__banner">
                                <a href = "/">
                                    <img className="hover-scale" src={banner} alt="" />
                                </a>
                            </div>
                        )
                    }
                    {
                        subtitle && (
                            <div className="service-block__subtitle">
                               {subtitle}                
                            </div>
                        )
                    }
                   
                    <div className="service-block__list">
                        <div className="service-block__list_item">
                            <img src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/mat-na-sui-bot-tay-da-chet-3.jpg?v=2" alt="" />
                        </div>
                        <div className="service-block__list_item">
                            <img src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/mat-na-sui-bot-tay-da-chet-3.jpg?v=2" alt="" />
                        </div>
                        <div className="service-block__list_item">
                            <img src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/mat-na-sui-bot-tay-da-chet-3.jpg?v=2" alt="" />
                        </div>
                        <div className="service-block__list_item">
                            <img src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/mat-na-sui-bot-tay-da-chet-3.jpg?v=2" alt="" />
                        </div>
                    </div>
                </div>

    )
};

export default Service;