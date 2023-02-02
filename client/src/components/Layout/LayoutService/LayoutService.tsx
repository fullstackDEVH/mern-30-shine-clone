import React , {FC} from 'react';
import { IServices } from '../../../interface/layout';
import {IoIosArrowForward} from 'react-icons/io';

interface IProp {
    service : IServices | undefined
};

const LayoutService:FC<IProp> = () => {
    return (
        <div className = "layout-services">
            <div className="layout-services__banner">
                <a href="/">
                    <img className ="hover-scale" src="https://storage.30shine.com/ResourceWeb/data/images/home/20220104-30shine-banner-shine-combo-1.jpg" alt="" />
                </a>
            </div>
            <div className="layout-services__list">
                <div className="layout-services__list_row">
                    {
                        [1,2,3,4].map((_,i) => (
                            <div className="layout-services__list_col" key={i}>
                                <a href="/">
                                    <div className="layout-services__list-item">
                                        <div className="list-item-media">
                                            <img className ="hover-scale" src="https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-cat-goi-massage-2.jpg" alt="" />
                                        </div>
                                        <div className="list-item-content">
                                            <div className="list-item-content__tit">Cắt gội massage</div>
                                            <div className="list-item-content__subtit">Bảng giá 2022 (hấp dẫn)</div>
                                        </div>
                                        <div className="list-item-icon">
                                            <IoIosArrowForward size={22} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }                  
                </div>
            </div>
        </div>
    )
};

export default LayoutService;