import React, { Component } from 'react'
import Axios  from 'axios'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const signInSchema = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản không được bỏ trống!"),
  matKhau: yup.string().required("Mật khẩu không được bỏ trống!"),
})

export default class ModalSignIn extends Component {
    render() {
        return (
              <div>
                <div>
                  <button type="button" className="btn__dangnhap" data-toggle="modal" data-target="#modalSignIn">
                    Đăng nhập
                  </button>
                    <div className="modal fade" id="modalSignIn" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Đăng nhập</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <Formik
                            initialValues={{
                              taiKhoan:'',
                              matKhau:''
                            }}
                            validationSchema = {signInSchema}
                            onSubmit ={(values) => {
                                Axios({
                                  methods:'POST',
                                  url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                                  data: values,
                                  headers: {
                                    "TokenCybersoft" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJIZXRIYW5TdHJpbmciOiIyOC8wMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDYwMDY0MDAwMDAiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTY0NjE1NDAwMH0.Aojk9-Qo5B5whL6jc8aZ4IOCm1RF9MrUhORXCrWBwEA'
                                }
                                }).then(res=>{
                                  console.log(res)
                                }).catch(err => {
                                  console.log(err)
                                })
                            }}
                            >
                            {props => (

                              <Form onSubmit={props.handleSubmit}>
                              <div className="modal-body">
                                  <div className="form-group"> 
                                    <p> Tài khoản</p>
                                    <Field className="form-control" type="text" name="taiKhoan" onChange={props.handleChange}/>
                                    <div className="errorMess">  
                                      <ErrorMessage name="taiKhoan"></ErrorMessage>  
                                    </div>   
                                  </div>
                                  <div className="form-group"> 
                                    <p> Mật khẩu</p>
                                    <Field className="form-control" type="password" name="matKhau" onChange={props.handleChange}/>
                                    <div className="errorMess">  
                                      <ErrorMessage name="matKhau"></ErrorMessage>  
                                    </div>
                                  </div>
                              </div>
                              <div className="modal-footer">
                                <button type="submit" className="btn__dangnhap" >Đăng nhập</button>
                                <button type="button" className="btn__dangky" data-toggle="modal"  data-dismiss="modal"  aria-label="Close" data-target="#modalSignUp">Đăng ký</button>
                              </div>
                            </Form>
                              )}

                              </Formik>
                        </div>
                    </div>
                  </div>
                </div>
                

              </div>
        )
    }
}
