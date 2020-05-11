
import request from '@/utils/request'

export function getSectionController(data) {
  return request({
    url: `/jeecg/rest/sectionController/list/${data.pageNo}/${data.pageSize}`,
    method: 'get'
  })
}
