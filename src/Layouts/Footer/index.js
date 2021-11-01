import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__container d-flex">
                    <div className="footer__info footer__item">
                        <img src="./image/logo.PNG" alt="" />
                        <p> CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế.</p>

                        <h1> NHẬN TIN SỰ KIỆN & KHUYẾN MÃI </h1>
                        <p> CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đén các bạn.</p>
                        <input placeholder="your.address@gmail.com"></input>
                        <button> ĐĂNG KÝ</button>
                    </div>
                    <div className="footer__item footer__form">
                        <form>
                            <h1> ĐĂNG KÝ TƯ VẤN</h1>
                            <input placeholder="Họ và tên *"></input>
                            <input placeholder="Email liên hệ *"></input>
                            <input placeholder="Điện thoại liên hệ *"></input>
                            <h1 className="mt-3"> Nhấn vào ô bên dưới *</h1>
                            <button> ĐĂNG KÝ TƯ VẤN </button>
                        </form>
                    </div>
                    <div className="footer__item">
                        <iframe src="https://www.facebook.com/lophocviet" />
                        
                    </div>
                </div>
                <div className="footer__end d-flex">
                    <div className="footer__item footer__map">
                        <p><i class="fas fa-map-marker-alt"></i> Cơ sở 1: 376 Võ Văn Tần - Quận 3 </p>
                        <p><i class="fas fa-map-marker-alt"></i> Cơ sở 2: 459 Sư Vạn Hạnh - Quận 10</p>
                        <p><i class="fas fa-map-marker-alt"></i> Cơ sở 3: Đà Nẵng - Quận Hải Châu</p>
                        <p><i class="fas fa-phone"></i> 096.105.1014 - 098.407.5835</p>
                    </div>
                    <div className="footer__item">
                        <p> Lập trình Front End  -  Lập trình React JS  -  Lập trình React Angular  -  Lập trình tư duy  -  Lập trình Node JS  -  Lập trình Backend  -  Lập trình Java Web  -  Lập trình Java Spring - Java Boot   -   Tôi Đi Code Dạo   -  Học SEO Hà Nội ở Vietmoz   -   Học lập trình trực tuyến</p>
                    </div>
                    <div className="footer__item">
                    <p> Anh ngữ giao tiếp - Khởi động Anh ngữ giao tiếp - Lấy đà Anh ngữ giao tiếp - Bật nhảy Anh ngữ giao tiếp - Bay trên không Anh ngữ giao tiếp - Tiếp đất</p>
                    </div>
                </div>
                <hr className="mt-2"/>
            </div>
        )
    }
}
