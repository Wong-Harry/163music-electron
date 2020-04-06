import request from '@/utils/request'

/**
 * type:资源类型,对应以下类型,默认为 0 即PC
 * 0: pc
 * 1: android
 * 2: iphone
 * 3: ipad
 * @export
 * @param {*} type
 * @returns
 */
export function getBanner(type) {
  return request({
    url: '/banner',
    method: 'get',
    params: {
      type: type
    }
  })
}
/**
 * 调用此接口 , 可获取独家放送
 *
 * @export
 * @returns
 */
export function privateContentMv() {
  return request({
    url: '/personalized/mv',
    method: 'get'
  })
}
