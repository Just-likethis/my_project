import ajax from './ajax'

//所有封装的借口函数
const BASE='/api'

//首页导航栏
export const reqNavigation = () => ajax('/homeNavigation')


//搜索关键字搜索商品

export const reqKeyword = (value) =>ajax({
    method:'GET',
    url:BASE+'/xhr/search/searchAutoComplete.json?keywordPrefix='+value,
})


//搜索热词
export const reqhotkeyword = () =>ajax.post(
BASE+ '/xhr/search/init.json'
)

export const reqcategoryL1List = ()=>ajax('/categoryL1List')