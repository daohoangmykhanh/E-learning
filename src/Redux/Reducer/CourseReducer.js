const initialState = {
    courses: [],
    list: [],
    detail: null,
};

const CourseReducer =  (state = initialState, action) => {
    switch (action.type) {
        case "DANH_SACH_KHOA_HOC":
            state.courses = action.courses
            return {...state};
        case "DANH_MUC_KHOA_HOC":
            state.list = action.list
            return {...state};
        case "THONG_TIN_KHOC_HOC":
            state.detail = action.detail;
            return {...state};
        default:
            return state
    }
}

export default CourseReducer;
