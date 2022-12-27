import React, {FC, useEffect, useState} from 'react';
import SalonBases from './Child/SalonBases';
import SalonRegions from './Child/SalonRegions';

interface IProps {

};

const SalonScreen: FC<IProps> = () => {
    const [isBoxSearch, setIsBoxSearch] = useState<boolean>(false);

    const handleShowBox = (e : React.MouseEvent<HTMLElement>) => {        
        setIsBoxSearch(pre=>!pre)
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
                <SalonRegions />
                {/* <SalonBases /> */}
            </div>
        </div>
    )
};

export default SalonScreen;