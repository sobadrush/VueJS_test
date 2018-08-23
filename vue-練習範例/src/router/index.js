import Vue from 'vue'
import Router from 'vue-router'

import HomePageComp from '@/components/HomePage/HomePage.vue';
import practiceComp from '@/components/practice/practice.vue';
import test_001Comp from '@/components/test_001/test_001.vue';
import test_002Comp from '@/components/test_002/test_002.vue';
import test_003Comp from '@/components/test_003/test_003.vue';
import test_004Comp from '@/components/test_004/test_004.vue';
import test_005Comp from '@/components/test_005/test_005.vue';
import test_006Comp from '@/components/test_006/test_006.vue';
import test_007Comp from '@/components/test_007/test_007.vue';
import test_008Comp from '@/components/test_008/test_008.vue';
import test_009Comp from '@/components/test_009/test_009.vue';
import test_010Comp from '@/components/test_010/test_010.vue';
import test_011Comp from '@/components/test_011/test_011.vue';
import practice2Comp from '@/components/practice2/practice2.vue';
import practice3Comp from '@/components/practice3/practice3.vue';
import fetchDataByJqueryAjaxComp from '@/components/fetchDataByJqueryAjax/fetchDataByJqueryAjax.vue';
import fetchDataByEs6FetchAPIComp from '@/components/fetchDataByEs6FetchAPI/fetchDataByEs6FetchAPI.vue';
import fetchDataByAxiosComp from '@/components/fetchDataByAxios/fetchDataByAxios.vue';
import fetchData_FilterComp from '@/components/fetchData_Filter/fetchData_Filter.vue';
import fetchDataByAxiosRouterParamComp from '@/components/fetchDataByAxiosRouterParam/fetchDataByAxiosRouterParam.vue';
import fetchDataByAxiosRouterParamPropsComp from '@/components/fetchDataByAxiosRouterParamProps/fetchDataByAxiosRouterParamProps.vue';

Vue.use(Router)

const router = new Router({
  // base: '/app', // 設定base，相對根路徑 (当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写 (基路径) 了) 【https://router.vuejs.org/zh/api/】
  // mode:'history',
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect: 'HomePage'
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePageComp
    },
    {
      path: '/practice' , component : practiceComp ,
      children : [ // 子路由(嵌套路由) ,
        { path: 'test001', component: test_001Comp } , // ※※※ 當 /practice/test001 test_001Comp 会被渲染在 【practiceComp】 的 <router-view> 中
        { path: 'test002', component: test_002Comp } ,
        { path: 'test003', component: test_003Comp } ,
        { path: 'test004', component: test_004Comp } ,
        { path: 'test005', component: test_005Comp } ,
        { path: 'test006', component: test_006Comp } ,
        { path: 'test007', name : 'test007Fuck' , component: test_007Comp } ,
        { path: 'test008', name : 'test008Fuck' , component: test_008Comp } ,
        { path: 'test009', name : 'test009Fuck' , component: test_009Comp } ,
        { path: 'test010', name : 'test010Fuck' , component: test_010Comp } ,
        { path: 'test011', name : 'test011Fuck' , component: test_011Comp } ,
      ]
    },
    {
      path: '/practice2' , name : 'practice2' , component : practice2Comp ,
      children : [ // 子路由(嵌套路由) , 以下的組件，會被渲染到 parctice2 組件中的 <router-view>
        { path: 'test_jqueryAjax', name: 'jqueryAjax' , component: fetchDataByJqueryAjaxComp } , // ※※※ 當 /practice/test001 test_001Comp 会被渲染在 【practiceComp】 的 <router-view> 中
        { path: 'test_Es6FetchApi', name: 'es6FetchApi' , component: fetchDataByEs6FetchAPIComp } ,
        { path: 'test_axios', name: 'axiosApi' , component: fetchDataByAxiosComp } ,
        { path: 'test_axios_filter', name: 'axiosApiWithFilter' , component: fetchData_FilterComp } ,
      ]
    },
    {
      path: '/practice3' , name : 'practice3' , component : practice3Comp ,
      children : [ // 子路由(嵌套路由) , 以下的組件，會被渲染到 parctice2 組件中的 <router-view>
        {
          path: 'test_axios_router/:queryCityId?/:empId?/:empName?',
          name: 'axiosApiRouterParam' ,
          component: fetchDataByAxiosRouterParamComp ,
        } ,
        {
          path: 'test_axios_router_props/:myQueryCityId?/:empId?/:empName?/:functionName?',
          name: 'axiosApiRouterParamProps' ,
          component: fetchDataByAxiosRouterParamPropsComp ,
          props : true, // 如果 props 被设置为 true，route.params 將會被設置為組鍵自身的屬性
        } ,
      ]
    },
    { path: '*', redirect: '/' } // 萬用路由(放最後)
  ]
})

// router.replace({ path: '/', redirect: '/' });
export default router
