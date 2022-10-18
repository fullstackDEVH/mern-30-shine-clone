import React , {FC} from 'react';
import { IService } from '../../../interface/layout';

interface IProp {
    service : IService | undefined
  };

const LayoutService:FC<IProp> = () => {
    return (
        <div className = "layout-services">
            <div className="layout-services__banner">
                <a href="/">
                    <img src="https://storage.30shine.com/ResourceWeb/data/images/home/20220104-30shine-banner-shine-combo-1.jpg" alt="" />
                </a>
            </div>
            <div className="layout-services__list">
                <div className="layout-services__list_row">
                    <div className="layout-services__list_col">
                        <a href="/">
                            <div className="layout-services__list-item">
                                <div className="list-item-media">
                                    <img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-cat-goi-massage-2.jpg" alt="" />
                                </div>
                                <div className="list-item-content">
                                    <div className="list-item-content__tit">Cắt gội massage</div>
                                    <div className="list-item-content__subtit">Bảng giá 2022 (hấp dẫn)</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="layout-services__list_col">
                        <a href="/">
                            <div className="layout-services__list-item">
                                <div className="list-item-media">
                                    <img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-cat-goi-massage-2.jpg" alt="" />
                                </div>
                                <div className="list-item-content">
                                    <div className="list-item-content__tit">Cắt gội massage</div>
                                    <div className="list-item-content__subtit">Bảng giá 2022 (hấp dẫn)</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="layout-services__list_col">
                        <a href="/">
                            <div className="layout-services__list-item">
                                <div className="list-item-media">
                                    <img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-cat-goi-massage-2.jpg" alt="" />
                                </div>
                                <div className="list-item-content">
                                    <div className="list-item-content__tit">Cắt gội massage</div>
                                    <div className="list-item-content__subtit">Bảng giá 2022 (hấp dẫn)</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="layout-services__list_col">
                        <a href="/">
                            <div className="layout-services__list-item">
                                <div className="list-item-media">
                                    <img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-cat-goi-massage-2.jpg" alt="" />
                                </div>
                                <div className="list-item-content">
                                    <div className="list-item-content__tit">Cắt gội massage</div>
                                    <div className="list-item-content__subtit">Bảng giá 2022 (hấp dẫn)</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default LayoutService;