import { categoryConstants } from "../../constants/category.constants";

let initialState = {
  getCategoryList: false,
  errorCategoryList: false,
  getCategoryDetail: false,
  errorCategoryDetail: false,
  getResponseDataCategory: false,
  testingSuccess: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case categoryConstants.LIST_SUCCESS:
      return {
        ...state,
        getCategoryList: action.payload.data,
        errorCategoryList: action.payload.errorMessage,
      };
    case categoryConstants.LIST_FAILURE:
      return {
        ...state,
        getCategoryList: false,
      };
    case categoryConstants.CREATE_SUCCESS:
      return {
        ...state,
        getResponseDataCategory: action.payload.data,
      };
    case categoryConstants.CREATE_FAILURE:
      return {
        ...state,
        getResponseDataCategory: false,
      };
    case categoryConstants.UPDATE_SUCCESS:
      return {
        ...state,
        getResponseDataCategory: action.payload.data,
      };
    case categoryConstants.UPDATE_FAILURE:
      return {
        ...state,
        getResponseDataCategory: false,
      };

    case categoryConstants.TESTING_SUCCESS:
      return {
        ...state,
        testingSuccess: false,
      };
    case categoryConstants.TESTING_FAILURE:
      return {
        ...state,
        testingSuccess: false,
      };
    default:
      return state;
  }
}
