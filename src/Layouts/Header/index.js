import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ModalSignIn from '../../Components/ModalSignIn';
import ModalSignUp from '../../Components/ModalSignUp';
import { danhMucKhoaHoc } from '../../Redux/Actions/user';

class Header extends Component {
    
    render() {

        
        return (
            <div className="header">
                <div className=" d-flex header__container">
                    <div className="header__logo">
                       <NavLink to="/"> <img src="./image/MIN-OP1.png" height="45"/> </NavLink>
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
        this.props.dispatch(danhMucKhoaHoc())
    }
}

const mapStateToProps = (rootReducer) => {
    return{
      list: rootReducer.CourseReducer.list
    }
}

export default connect(mapStateToProps)(Header)
