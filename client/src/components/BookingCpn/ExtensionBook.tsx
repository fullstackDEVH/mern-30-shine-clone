
interface IInfor {
    salon : string;
    services : (string | number)[];
    time : string;
}

interface IProps {
    infor : IInfor;
}

const ExtensionBook : React.FC<IProps> = ({infor}) => {
    return (
        <>
         {
                    Object.values(infor).filter(i => i.length > 0).length === 3 ? (
                        <div className="extension mt-3">
                            <div className="extension-title">Anh sẽ happy hơn nếu</div>
                            <div className="extension-note mt-1">
                                <div className="extension-note-head">
                                    <img src="https://30shine.com/static/media/icon_note.7f8d920f.svg" alt="icon" />
                                    <span>Yêu cầu đặc biệt</span>
                                </div>
                                <div className="extension-note-input">
                                    <textarea placeholder="VD: Cắt tóc kỹ, gội đầu sạch !!" cols={30} rows={1}></textarea>
                                </div>
                            </div>

                            <div className="extension-advance">
                                <div className="extension-advance-item mt-1">
                                    <div className="extension-header">
                                        <div>
                                            <img src="https://30shine.com/static/media/icon_advice.bc43db00.svg" alt="icon headphone" />
                                            <span>Chụp hình sau khi cắt</span>
                                        </div>
                                        <input className="switch-btn" aria-checked={true} type="checkbox" />
                                    </div>
                                    <p>Anh cho phép các em giới thiệu về chương trình khuyến mãi, dịch vụ tốt nhất dành cho anh</p>
                                </div>

                                <div className="extension-advance-item mt-1">
                                    <div className="extension-header">
                                        <div>
                                            <img src="https://30shine.com/static/media/icon_camera.e875c799.svg" alt="icon camera" />
                                            <span>Yêu cầu tư vấn</span>
                                        </div>
                                        <input className="switch-btn" aria-checked={true} type="checkbox" />
                                    </div>
                                    <p>Anh cho phép chụp hình lưu lại kiểu tóc, để lần sau không phải mô tả lại cho thợ khác</p>
                                </div>
                            </div>
                        </div>
                    ) : null
                }</>
    )
};

export default ExtensionBook;