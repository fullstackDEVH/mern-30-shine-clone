import React from 'react';

const SalonBases = () => {

    const showDistrict = (e : React.MouseEvent<HTMLDivElement>) => {
        let district = document.querySelector('.district-dropdown') as HTMLDivElement | null;
        let img = document.querySelector('.district-box > img') as HTMLDivElement | null;

        district?.classList.toggle('show');
        img?.classList.toggle('rotate');
    };
    
    return (
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
    )
};

export default SalonBases;