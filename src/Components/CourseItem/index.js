import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class CourseItem extends Component {
    render() {
        return (
            <div className="card p-2">
                <div>
                    <img src={this.props.item.hinhAnh} alt="Ảnh khóa học" style={{width:"100%", height:170}}/>
                </div>
                <div className="course__item">
                    <h1 className="title__course"> {this.props.item.tenKhoaHoc} </h1>
                    <p>Giảng viên: {this.props.item.nguoiTao.hoTen}</p>
                    <p>Lượt xem: {this.props.item.luotXem}</p>
                    <NavLink to={`/detail/${this.props.item.maKhoaHoc}`}> <button className="btn__dangky"> Chi tiết</button> </NavLink>

                </div>
            </div>
        )
    }
}
