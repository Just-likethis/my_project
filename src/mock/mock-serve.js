/* 
使用mockjs定义mock接口
*/
import Mock from 'mockjs'
import data from './data.json' // 加载json文件得到是解析后的js对象
import categoryL1List from './category.json'
// goods接口
Mock.mock('/homeNavigation', {code: 0, data: data.kingKongList})

Mock.mock('/categoryL1List', {code: 0, categoryL1List: categoryL1List.categoryL1List})
