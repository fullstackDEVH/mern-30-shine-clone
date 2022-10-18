import React from 'react';
import Layout from '../../components/Layout/Layout';
import Slider from '../../components/Slider/Slider';

const Home = () => {

    return (
        <>
            <Slider />
            <Layout 
                type = "service"
                title = "Trải nghiệm dịch vụ " 
                subtitle = "Thư giãn 30 phút và bạn sẽ tỏa sáng" 
                isViewAll = {true}
                service = {{banner : '' , services : []}}
                // blog = {[{img : "", decription : ""}]}
            />
        </>
    )
};

export default Home;