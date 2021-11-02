import { DANH_MUC_KHOA_HOC, DANH_SACH_KHOA_HOC, THONG_TIN_KHOA_HOC } from "../Actions/type";

const initialState = {
    courses: [],
    list: [],
    detail: null,
};

const CourseReducer =  (state = initialState, action) => {
    switch (action.type) {
        case DANH_SACH_KHOA_HOC:
            state.courses = action.payload
            return {...state};
        case DANH_MUC_KHOA_HOC:
            state.list = action.payload
            return {...state};
        case THONG_TIN_KHOA_HOC:
            state.detail = action.payload;
            return {...state};
        default:
            return state
    }
}

export default CourseReducer;
