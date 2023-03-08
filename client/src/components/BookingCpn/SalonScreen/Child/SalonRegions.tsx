import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'redux/hook';
import {  setSalon } from 'redux/slice/bookingSlice';
import { fetchRegions,fetchProvices } from 'redux/slice/bookingSlice';
import { AppDispatch } from 'redux/store';

const SalonRegions = () => {
  // const dispatch = useAppDispatch();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=> {
    // dispatch(fetchRegions());
    dispatch(fetchProvices());
  }, []);
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