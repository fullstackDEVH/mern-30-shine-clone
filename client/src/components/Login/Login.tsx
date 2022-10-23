import React, {FC, ChangeEvent, useState } from 'react';

interface IMyProps {
    doShowLogin : () => void;
    overlay : boolean;
};

const Login: FC<IMyProps> = ({doShowLogin, overlay}) => { 
    const [phone, setPhone ] = useState<string>("");
    
    const changeInput = (e : ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value.slice(0, 10));        
    }

    return (
        <div className={`login ${overlay ? "show" : ""}`}>
            <div className="login-overlay"></div>
            <div className="login-modal">
                <div className="login-modal-close" onClick = {doShowLogin}>
                    <span>X</span>
                </div>
                <h4>Đăng nhập</h4>
                <div className="login-modal-body">
                    <span>Số điện thoại của anh là gì ạ ??</span>
                    <div className = "login-modal-body-input">
                        <input type="tel" placeholder ="Ví dụ : 0385.XXX.XXX" 
                            onChange={changeInput}
                            value = {phone}
                       
                        />
                    </div>
                    <div className = "login-modal-body-btn">
                        <span>Tiếp Tục</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;