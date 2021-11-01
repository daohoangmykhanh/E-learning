import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'

class DetailScreen extends Component {
    render() {
        return (
            <div>
                <img src={this.props.courseDetail.hinhAnh} alt="course detail" />
                <h3> {this.props.courseDetail.tenKhoaHoc}</h3>
                <p>Người tạo:</p>
                <p>Tài khoản: {this.props.courseDetail.nguoiTao.taiKhoan}</p>
                <p>Họ tên: {this.props.courseDetail.nguoiTao.hoTen}</p>
            </div>
        )
    }

    componentDidMount(){
        Axios({
            method: "GET",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=111"
        }).then(res => {
           this.props.dispatch({
               type: 'THONG_TIN_KHOA_HOC',
               detail: res.data
           });
        }).catch(err => {
            console.log(err)
        })
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
