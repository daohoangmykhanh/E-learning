import React, { Component } from 'react';
import CourseItem from '../../Components/CourseItem';
import {connect} from 'react-redux';
import { danhSachKhoaHoc } from '../../Redux/Actions/user';


class HomeScreen extends Component {
    render() {
        return (
            <div >
                <h1 className="heading__title container"> Các khóa học mới nhất </h1>
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
        this.props.dispatch(danhSachKhoaHoc())
    }
}


const mapStateToProps = (rootReducer) =>{
    return{
        courseList: rootReducer.CourseReducer.courses
    }
}

export default connect(mapStateToProps)(HomeScreen);
