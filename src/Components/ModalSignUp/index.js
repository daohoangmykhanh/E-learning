import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userService } from '../../Services';
import { signUpSchema} from '../../Services/user'

export default class ModalSignUp extends Component {
    render() {
        return (
            <div>
                          <Formik
                            initialValues={{
                                taiKhoan:'',
                                matKhau:'',
                                hoTen:'',
                                email:'',
                                soDT:'',
                                maNhom:'GP01'
                            }}
                            validationSchema={signUpSchema}
                            onSubmit = {(values) => {
                              
                                    console.log(values)
                              
                            }}       
                            render = { ( { handleChange }) => (
                                <div>
                                <button type="button" className="btn__dangky" data-toggle="modal" data-target="#modalSignUp">
                                    Đăng ký
                                </button>
                                    <div className="modal fade" id="modalSignUp" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Đăng ký</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                            <Form>
                                <div className="modal-body">
                                        <div className="form-group">
                                            <p> Tài khoản</p>
                                            <Field type="text" name="taiKhoan" className="form-control" onChange={handleChange}/> 
                                            <div className="errorMess">  
                                            <ErrorMessage name="taiKhoan"></ErrorMessage>  
                                            </div>                    
                                        </div>
                                        <div className="form-group">
                                            <p> Mật khẩu</p>
                                            <Field type="password" name="matKhau" className="form-control" onChange={handleChange}/>
                                            <div className="errorMess">  
                                            <ErrorMessage name="matKhau"></ErrorMessage>  
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <p>Họ tên</p>
                                            <Field type="text" name="hoTen" className="form-control" onChange={handleChange}/>
                                            <div className="errorMess">  
                                            <ErrorMessage name="hoTen"></ErrorMessage>  
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <p> Email</p>
                                            <Field type="text" name="email" className="form-control" onChange={handleChange}/>
                                            <div className="errorMess">  
                                            <ErrorMessage name="email"></ErrorMessage> 
                                            </div> 
                                        </div>
                                        <div className="form-group">
                                            <p>Số điện thoại</p>
                                            <Field type="text" name="soDT" className="form-control" onChange={handleChange}/>
                                            <div className="errorMess">                                          
                                            <ErrorMessage name="soDT"></ErrorMessage>  
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <p>Mã nhóm</p>
                                            <Field component="select" type="text" name="maNhom" className="form-control" onChange={handleChange}>
                                                <option>GP01</option>
                                                <option>GP02</option>
                                                <option>GP03</option>
                                                <option>GP04</option>
                                                <option>GP05</option>
                                                <option>GP06</option>
                                                <option>GP07</option>
                                                <option>GP08</option>
                                                <option>GP09</option>
                                                <option>GP10</option>
                                            </Field>
                                            <div className="errorMess">                                          
                                            <ErrorMessage name="maNhom"></ErrorMessage>  
                                            </div>
                                        </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn__dangky" > Đăng ký</button>
                                    <button type="button" className="btn__dangnhap" data-toggle="modal"  data-dismiss="modal"  aria-label="Close" data-target="#modalSignIn">Đăng nhập</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                  </div>
                </div>
                              )}
                                />
                
            </div>
        )
    }
}

