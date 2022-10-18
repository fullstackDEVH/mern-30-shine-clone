import React , {FC} from 'react';
import LayoutSlide from './LayoutSlide/LayoutSlide';
import {IoMdArrowDropright} from 'react-icons/io';
import LayoutService from './LayoutService/LayoutService';
import { ILayout } from '../../interface/layout';

const Layout:FC<ILayout> = ({ title, isViewAll, subtitle, type, blog, service }) => {
    return (
        <div className={`layout ${type}`}>
            <div className="layout-cont">
                <div className="layout-cont__head">
                    <div className="layout-cont__head-m">
                        <div className="layout-cont__head-m_title">
                            {title}
                        </div>
                        <div className="layout-cont__head-m_subtitle">
                            {subtitle}
                        </div>
                    </div>
                    {
                        isViewAll && (
                            <div className="layout-cont__head_view_all">
                                <span>Xem tất cả</span>
                                <IoMdArrowDropright size = {20} />
                            </div>
                    )}
                    
                </div>
                {
                    type === "slide" ?  <LayoutSlide blog={blog} /> :  <LayoutService service= {service} />
                }
            </div>
        </div>
    )
};

export default Layout;