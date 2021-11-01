import React, { Component } from 'react';
import CourseItem from '../../Components/CourseItem';
import Axios from 'axios';
import {connect} from 'react-redux';


class HomeScreen extends Component {
    render() {
        return (
            <div >
                <h1 className="heading__title"> Các khóa học mới nhất </h1>
                    <div className="container">
                        <div className="row"> 
                            {
                                this.props.courseList.map((item,index) => (
                                    <div className="col-3 p-2" key={index} > 
                                    <CourseItem item={item}></CourseItem>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            </div>
        )
    }

    componentDidMount() {

        Axios({
            method:"GET",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            headers: {
                "TokenCybersoft" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJIZXRIYW5TdHJpbmciOiIyOC8wMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDYwMDY0MDAwMDAiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTY0NjE1NDAwMH0.Aojk9-Qo5B5whL6jc8aZ4IOCm1RF9MrUhORXCrWBwEA'
            }
        }).then(res=> {
            console.log(res)
           this.props.dispatch({
               type: "DANH_SACH_KHOA_HOC",
               courses: res.data
           });
        }).catch(err => {
            console.log(err)
        });

    }
}


const mapStateToProps = (rootReducer) =>{
    return{
        courseList: rootReducer.CourseReducer.courses
    }
}

export default connect(mapStateToProps)(HomeScreen);
