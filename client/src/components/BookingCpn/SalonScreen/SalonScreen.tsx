import React, {FC, useEffect, useState} from 'react';

interface IProps {

};

const SalonScreen: FC<IProps> = () => {
    const [isBoxSearch, setIsBoxSearch] = useState<boolean>(false);

    const handleShowBox = (e : React.MouseEvent<HTMLElement>) => {        
        setIsBoxSearch(pre=>!pre)
    };

    const showDistrict = (e : React.MouseEvent<HTMLDivElement>) => {
        let district = document.querySelector('.district-dropdown') as HTMLDivElement | null;
        let img = document.querySelector('.district-box > img') as HTMLDivElement | null;

        district?.classList.toggle('show');
        img?.classList.toggle('rotate');
    };

   /* const test = (e : React.MouseEvent<HTMLDivElement>) => { 
            console.log(
                (e.target as Element).closest(':not(.district-dropdown-item:first-child)'))

        if((e.target as Element).closest('.district-dropdown-item')){
            
        }
    }*/

    return (
        <div className="salon-screen">
            <div className="salon-screen-input">
                <div className="salon-screen-input-contain">
                    <div 
                        onClick={handleShowBox}
                        style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:"100%"}}>
                        <div className="icon-search">
                            <img src="https://30shine.com/static/media/search.4c2a166d.svg" alt="icon search" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Tìm kiếm salon theo tỉnh, thành phố, quận"
                            onBlur={()=>setIsBoxSearch(false)}
                        />
                    </div>

                    {
                        isBoxSearch ? (
                            <div className={`search-box ${isBoxSearch ? "show" : ""}`}>
                                <div className="city">
                                    <div className="city-title">Tỉnh thành</div>
                                    <div className="city-item">
                                        <div className="city-item-name">Hồ Chí Minh</div>
                                        <div className="city-item-amount-bases">46 cơ sở</div>
                                    </div>
                                    <div className="city-item">
                                        <div className="city-item-name">Hồ Chí Minh</div>
                                        <div className="city-item-amount-bases">46 cơ sở</div>
                                    </div>
                                    <div className="city-item">
                                        <div className="city-item-name">Hồ Chí Minh</div>
                                        <div className="city-item-amount-bases no-bases">46 cơ sở</div>
                                    </div>
                                </div>
                            </div> 
                        ) : null
                    }
                </div>           
            </div>
            
            <div className="salon-screen-location">
                <div className="contain">
                    <img src="https://30shine.com/static/media/navigate-booking.a322957e.svg" alt="icon location" />
                    <span>Tìm salon gần đây</span>
                </div>
            </div>

            <div className="salon-screen-list">
                {/* <div className="salon-screen-list-regions">
                    <div className="region">
                        <div className="region-title">
                                Miền Bắc
                        </div>
                        <div className="region-cities">
                                <div className="city-name">Hà nội 1</div>
                                <div className="city-name">Hà nội</div>
                                <div className="city-name">Hà nội</div>
                                <div className="city-name">Hà nội 1</div>
                                <div className="city-name">Hà nội</div>
                                <div className="city-name">Hà nội</div>
                        </div>
                    </div>
                    
                    <div className="region">
                        <div className="region-title">
                            Miền Trung
                        </div>
                        <div className="region-cities">
                            <div className="city-name">Hà nội 1</div>
                            <div className="city-name">Hà nội</div>
                            <div className="city-name">Hà nội</div>
                            <div className="city-name">Hà nội 1</div>
                            <div className="city-name">Hà nội</div>
                            <div className="city-name">Hà nội</div>
                        </div>  
                    </div>

                    <div className="region">
                        <div className="region-title">
                            Miền Nam
                      </div>
                        <div className="region-cities">
                            <div className="city-name">Hà nội 1</div>
                            <div className="city-name">Hà nội</div>
                            <div className="city-name">Hà nội</div>
                            <div className="city-name">Hà nội 1</div>
                            <div className="city-name">Hà nội</div>
                            <div className="city-name">Hà nội</div>
                        </div>  
                    </div>
                </div> */}

                <div className="salon-screen-list-bases">
                    <div className="district">
                        <div className="district-box" onClick={showDistrict} >
                            <span>Tất cả quận huyện</span>
                            <img src="https://30shine.com/static/media/caretRight.b0d191b3.svg" alt="icon arrow right" />
                        </div>

                        <div className="district-dropdown">
                            <div className="district-dropdown-item">Tất cả quận huyện</div>
                            <div className="district-dropdown-item">Quận thanh khê</div>
                            <div className="district-dropdown-item">Quận hải châu</div>
                        </div>
                    </div>

                    <div className="salon-box-switch">
                        <div className="box-switch">
                            <span>
                                Có chỗ đậu ô tô 
                                <span> (Có thể mất phí)</span>
                            </span>
                        </div>
                        <input type="checkbox" ></input>
                    </div>

                    <div className="salon">
                        <div className="salon-item">
                            <div className="salon-item-media">
                                <img src="https://storage.30shine.com/salon_image/front/87.png" alt="salon address" />
                            </div>
                            <div className="salon-item-content">
                                <div className="item-address box-2">345 Nguyễn Văn Linh, P. Thạc Gián, Quận Thanh Khê, Đà Nẵng</div>
                                <div className="item-description box-3">Đối diện ngân hàng Techcombank, cách ngã 3 Nguyễn Văn Linh - Nguyễn Tri Phương 800m</div>
                            </div>
                        </div>
                        <div className="salon-item">
                            <div className="salon-item-media">
                                <img src="https://storage.30shine.com/salon_image/front/87.png" alt="salon address" />
                            </div>
                            <div className="salon-item-content">
                                <div className="item-address box-2">345 Nguyễn Văn Linh, P. Thạc Gián, Quận Thanh Khê, Đà Nẵng</div>
                                <div className="item-description box-3">Đối diện ngân hàng Techcombank, cách ngã 3 Nguyễn Văn Linh - Nguyễn Tri Phương 800m</div>
                            </div>
                        </div>
                        <div className="salon-item">
                            <div className="salon-item-media">
                                <img src="https://storage.30shine.com/salon_image/front/87.png" alt="salon address" />
                            </div>
                            <div className="salon-item-content">
                                <div className="item-address box-2">345 Nguyễn Văn Linh, P. Thạc Gián, Quận Thanh Khê, Đà Nẵng</div>
                                <div className="item-description box-3">Đối diện ngân hàng Techcombank, cách ngã 3 Nguyễn Văn Linh - Nguyễn Tri Phương 800m</div>
                            </div>
                        </div>
                        <div className="salon-item">
                            <div className="salon-item-media">
                                <img src="https://storage.30shine.com/salon_image/front/87.png" alt="salon address" />
                            </div>
                            <div className="salon-item-content">
                                <div className="item-address box-2">345 Nguyễn Văn Linh, P. Thạc Gián, Quận Thanh Khê, Đà Nẵng</div>
                                <div className="item-description box-3">Đối diện ngân hàng Techcombank, cách ngã 3 Nguyễn Văn Linh - Nguyễn Tri Phương 800m</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default SalonScreen;