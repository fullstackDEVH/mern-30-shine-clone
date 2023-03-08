const ServiceListItem = () => {
  return (
    <div className="service-list-item">
      <div className="service-media">
        <img
          src="	https://s3.ap-southeast-1.amazonaws.com/storage.30shine.com/service/combo_booking/638.jpg"
          alt="img service"
        />
      </div>
      <div className="service-content">
        <div className="service-content-title">
          Combo Cắt gội VIP (all dịch vụ chăm sóc)
        </div>
        <div className="service-content-desc">
          Phòng gội VIP nhất từ trước đến giờ!!! Thư giãn massage bằng đá nóng
          núi lửa Himalaya giảm tê cứng, căng cơ Gội dưỡng sinh thẩm thấu các
          dưỡng chất bảo vệ da đầu Cắt xả và vuốt sáp tạo kiểu bằng gôm sáp
          Glanzen giữ nếp tóc lâu
        </div>
        <div className="service-content-price">150K</div>
        <div className="service-content-btn">
          <img
            src="https://30shine.com/static/media/checked.ae42306a.svg"
            alt="icon tick"
          />
          Chọn
        </div>
      </div>
    </div>
  );
};

export default ServiceListItem;
