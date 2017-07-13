import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import { getImages } from '../../services/user.api'
import * as imageType from './duck'
import * as mainType from '../Main/duck'


function* getImagesagas(action){
  try{
    const res = yield call(getImages)
    const imagesa = res.data.goods_list

    const newImages = imagesa.map(image => {
      return ({
        id:image.id,
        path:image.img_path,
        price:image.sale_price,
        name:image.name,
        desc:image.desc
      })
    })
    console.log("image-------->"+newImages[1].name);
      console.log("image-------->"+newImages[1].id);
        console.log("image-------->"+newImages[1].path);
    yield put({
      type:imageType.GET_IMAGES,
      payload:newImages
    })

}catch(e){
    console.log(e);
    yield put({
      type:imageType.GET_IMAGES,
      payload:[]
    })
  }
}


function* imageSaga(action) {
  if (action.type === imageType.FOLLOW_IMAGE_REQUEST) {
    yield put({
      ...action,
      type: imageType.FOLLOW_IMAGE
    })
  } else if (action.type === imageType.UNFOLLOW_IMAGE_REQUEST) {
    yield put({
      ...action,
      type: imageType.UNFOLLOW_IMAGE
    })
  }else if (action.type === imageType.DELETE_IMAGE_REQUEST) {
    yield put({
      ...action,
      type: imageType.DELETE_IMAGE
    })
  }
  
}

export default function* rootImageSaga() {
  yield all([
    takeLatest(imageType.ON_IMAGES,getImagesagas),
    takeLatest(imageType.FOLLOW_IMAGE_REQUEST, imageSaga),
    takeLatest(imageType.UNFOLLOW_IMAGE_REQUEST, imageSaga),
    takeLatest(imageType.DELETE_IMAGE_REQUEST, imageSaga)
  ])
}