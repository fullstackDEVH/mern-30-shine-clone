import React from 'react';

const SalonRegions = () => {
    return (
        <div className="salon-screen-list-regions">
            <div className="region">
                <div className="region-title">
                    Miền Bắc
                </div>
                <div className="region-cities">
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
        </div>
    )
};

export default SalonRegions;