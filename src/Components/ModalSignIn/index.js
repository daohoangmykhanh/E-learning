import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userService } from '../../Services';
import { signInSchema } from '../../Services/user';

export default class ModalSignIn extends Component {
    render() {
        return (
              <div>
                          <Formik
                            initialValues={{
                              taiKhoan:'',
                              matKhau:''
                            }}
                            validationSchema = {signInSchema}
                            onSubmit ={(values) => {
                              userService.signIn(values)
                                .then(res=>{
                                  console.log(res)
                                }).catch(err => {
                                  console.log(err)
                                })
                            }}
                            
                            render = {( { handleChange } ) => (
                              
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
                              <Form>
                              <div className="modal-body">
                                  <div className="form-group"> 
                                    <p> Tài khoản</p>
                                    <Field className="form-control" type="text" name="taiKhoan" onChange={handleChange}/>
                                    <div className="errorMess">  
                                      <ErrorMessage name="taiKhoan"></ErrorMessage>  
                                    </div>   
                                  </div>
                                  <div className="form-group"> 
                                    <p> Mật khẩu</p>
                                    <Field className="form-control" type="password" name="matKhau" onChange={handleChange}/>
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
