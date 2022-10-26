import React, { useEffect, useState } from 'react';

const Discovery = () => {
    const [active, setActive] = useState<number>(0);
    const [scroll, setScroll] = useState<boolean>(false);
    
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            window.scrollY > 130 ? setScroll(true) : setScroll(false)
        })
        return () => {
            window.removeEventListener("scroll" ,()=>{});
        }
    }, [])
    return (
        <div className="discover">
            <div className="discover-contain">
                <div className="discover-header">
                    <div className={`discover-header__top ${scroll ? "show" : ""}`}>
                        {
                            ["Discover", "Style Master", "Lookbook"].map((item, i)=> (
                                <div className="discover-header__top_col" key={i+item}>
                                    <button className={active === i ? "active" : ""}
                                        onClick={()=>setActive(i)}
                                    >{item}</button>
                                </div>
                            ))
                        }
                    </div>

                    <div className="discover-header__title">
                        CÙNG 30SHINE KHÁM PHÁ
                        <span>XU HƯỚNG TÓC HOT NHẤT</span>
                    </div>
                </div>
                <div className="discover-body">
                    
                </div>
            </div>
        </div>
    )
};

export default Discovery;