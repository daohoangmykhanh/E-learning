import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ModalSignIn from '../../Components/ModalSignIn';
import ModalSignUp from '../../Components/ModalSignUp';

class Header extends Component {
    
    render() {

        
        return (
            <div className="header">
                <div className=" d-flex header__container">
                    <div className="header__logo">
                       <NavLink to="/home"> <img src="./image/MIN-OP1.png" height="45"/> </NavLink>
                    </div>
                    <div className="header__dropdown">
                        <>
                        <div className="dropdown">
                          <button className="btn dropdown-toggle"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-bars"></i>  Danh mục khoá học
                          </button>

                          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            {
                              this.props.list.map((item,index) => (
                                <a key={index} class="dropdown-item" href="#">{item.tenDanhMuc}</a>
                              ))
                            }
                          </div>
                        </div>
                        </>
                    </div>
                    <div className="header__search">
                        <input placeholder="Tìm kiếm khóa học"></input>
                    </div>
                    <div className="header__btn d-flex">
                        <ModalSignIn/>
                        <ModalSignUp/>  
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
      Axios({
        method:"GET",
        url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
        headers: {
          "TokenCybersoft" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJIZXRIYW5TdHJpbmciOiIyOC8wMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDYwMDY0MDAwMDAiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTY0NjE1NDAwMH0.Aojk9-Qo5B5whL6jc8aZ4IOCm1RF9MrUhORXCrWBwEA'
        }
      }).then(res => {
        this.props.dispatch({
          type: 'DANH_MUC_KHOA_HOC',
          list: res.data
        })
        console.log(res);
      }).catch(err => {
        console.log(err)
      })
    }
}

const mapStateToProps = (rootReducer) => {
    return{
      list: rootReducer.CourseReducer.list
    }
}

export default connect(mapStateToProps)(Header)
