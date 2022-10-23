import React from 'react';
import Service from '../../components/Service/Service';

const OtherServices = () => {
    return (
        <div className= "service">
            <div className="service-contain"> 
                <Service 
                    title="SHINE COMBO CẮT GỘI 10 BƯỚC" 
                    banner="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/20220104-30shine-banner-shine-combo.jpg" 
                    list={[]}
                    subtitle = "Dịch vụ chăm sóc tóc đặc biệt dùng kèm Shine Combo    "
                    />
                <Service 
                    title="VIP COMBO " 
                    banner="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/combo-cat-goi-s-vip-5.jpg?v=1" 
                />
                <Service 
                    title="LẤY RÁY TAI" 
                    banner="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-dich-vu-lay-ray-tai.jpg" 
                />
                <Service 
                    title="PARADISE SPACE" 
                    banner="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/dich-vu-paradise-space.jpg?v=1" 
                />
                <Service 
                    title="UỐN" 
                    banner="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/20220104-banner-uon-1.jpg" 
                />
                <Service 
                    title="PARADISE SPACE" 
                    banner="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/dich-vu-paradise-space.jpg?v=1" 
                />
            </div>
        </div>
     
    )
};

export default OtherServices;