import { courseService } from '../../Services';
import { createAction } from '../../Redux/Actions';
import { DANH_MUC_KHOA_HOC } from '../../Redux/Actions/type';
import { THONG_TIN_KHOA_HOC } from '../../Redux/Actions/type';
import { DANH_SACH_KHOA_HOC } from '../../Redux/Actions/type';

export const danhMucKhoaHoc = () => {
    return dispatch => {
        courseService.danhMucKhoaHoc()
        .then(res => {
          dispatch(createAction(DANH_MUC_KHOA_HOC,res.data))
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
    }
}

export const danhSachKhoaHoc = () => {
    return dispatch => {
        courseService.danhSachKhoaHoc()
        .then(res=> {
             console.log(res)
            dispatch(createAction(DANH_SACH_KHOA_HOC, res.data));
         }).catch(err => {
             console.log(err)
         });
 
    }
}

export const thongTinKhoaHoc = (id) => {
    return dispatch => {
        courseService.thongTinKhoaHoc(id)
        .then(res => {
           dispatch(createAction(THONG_TIN_KHOA_HOC,res.data));
           console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}