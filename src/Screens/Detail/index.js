import React, { Component } from 'react'
import {connect} from 'react-redux'
import { thongTinKhoaHoc } from '../../Redux/Actions/user'

class DetailScreen extends Component {
    render() {
        return (
            <div className="detail__container container">
                <img src={this.props.courseDetail.hinhAnh} alt="ảnh khóa học" />
                <h1>{this.props.courseDetail.tenKhoaHoc}</h1>
                <p>Người tạo:</p>
                <p className="pl-3">Tài khoản: {this.props.courseDetail.nguoiTao.taiKhoan}</p>
                <p className="pl-3">Họ tên: {this.props.courseDetail.nguoiTao.hoTen}</p>
            </div>
        )
    }

    componentDidMount(){
        this.props.dispatch(thongTinKhoaHoc(this.props.match.params.courseId))
    }
}

const mapStateToProps = state => ({
    courseDetail: state.CourseReducer.detail || {
        maKhoaHoc: '',
        tenKhoaHoc: '',
        hinhAnh:'',
        nguoiTao: {
            taiKhoan:'',
            hoTen: ''
        }
    }
})

export default connect(mapStateToProps)(DetailScreen)
