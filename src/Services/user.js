import Axios from 'axios'
import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    taiKhoan: yup.string().required("Tài khoản không được bỏ trống!"),
    matKhau: yup.string().required("Mật khẩu không được bỏ trống!"),
    nhapLaiMatKhau: yup.string().required("Nhập lại mật khẩu không được bỏ trống!"),
    hoTen: yup.string().required("Họ tên không được bỏ trống!"),
    email: yup.string().required("Email không được bỏ trống!").email("Email không đúng định dạng!"),
    soDT: yup.string().required("Số điện thoại không được bỏ trống!").matches(/^[0-9]+$/),
})

export const signInSchema = yup.object().shape({
    taiKhoan: yup.string().required("Tài khoản không được bỏ trống!"),
    matKhau: yup.string().required("Mật khẩu không được bỏ trống!"),
  })

class UserService {
    signUp(data){
        return Axios({ 
            method: "POST",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data,                                  
            headers: {
                "TokenCybersoft" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJIZXRIYW5TdHJpbmciOiIyOC8wMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDYwMDY0MDAwMDAiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTY0NjE1NDAwMH0.Aojk9-Qo5B5whL6jc8aZ4IOCm1RF9MrUhORXCrWBwEA'
            } 
        })
    }
    signIn(data){
        return Axios({
            methods:'POST',
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data,
            headers: {
              "TokenCybersoft" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJIZXRIYW5TdHJpbmciOiIyOC8wMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDYwMDY0MDAwMDAiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTY0NjE1NDAwMH0.Aojk9-Qo5B5whL6jc8aZ4IOCm1RF9MrUhORXCrWBwEA'
          }
        })
    }
}

export default UserService;


