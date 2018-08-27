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
import test_012Comp from '@/components/test_012/test_012.vue';
import test_013Comp from '@/components/test_013/test_013.vue';
import test_014Comp from '@/components/test_014/test_014.vue';
import practice2Comp from '@/components/practice2/practice2.vue';
import practice3Comp from '@/components/practice3/practice3.vue';
import fetchDataByJqueryAjaxComp from '@/components/fetchDataByJqueryAjax/fetchDataByJqueryAjax.vue';
import fetchDataByEs6FetchAPIComp from '@/components/fetchDataByEs6FetchAPI/fetchDataByEs6FetchAPI.vue';
import practice4Comp from '@/components/practice4/practice4.vue';
import slot001Comp from '@/components/practice4/slot001/slot001.vue';
import slot002Comp from '@/components/practice4/slot002/slot002.vue';
import slot003Comp from '@/components/practice4/slot003/slot003.vue';
import practice5Comp from '@/components/practice5/practice5.vue';
import fetchDataByAxiosComp from '@/components/fetchDataByAxios/fetchDataByAxios.vue';
import fetchData_FilterComp from '@/components/fetchData_Filter/fetchData_Filter.vue';
import fetchDataByAxiosRouterParamComp from '@/components/fetchDataByAxiosRouterParam/fetchDataByAxiosRouterParam.vue';
import fetchDataByAxiosRouterParamPropsComp from '@/components/fetchDataByAxiosRouterParamProps/fetchDataByAxiosRouterParamProps.vue';
import practice9Comp from '@/components/practice9/practice9.vue';
import fight001Comp from '@/components/fight001/fight001.vue';
import refDataComp from '@/components/practice5/refData/refData.vue';
import practice6Comp from '@/components/practice6/practice6.vue'; // 表單控件
import cformComp001 from '@/components/practice6/formComp001/formComp001.vue';
import cformComp002 from '@/components/practice6/formComp002/formComp002.vue';
import cformComp003 from '@/components/practice6/formComp003/formComp003.vue';
import cformComp004 from '@/components/practice6/formComp004/formComp004.vue';
import cformComp005 from '@/components/practice6/formComp005/formComp005.vue';

Vue.use(Router)

const router = new Router({
  // base: '/app', // 設定base，相對根路徑 (当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写 (基路径) 了) 【https://router.vuejs.org/zh/api/】
  // mode:'history',
  mode:'hash',
  routes: [
    {
      path: '/', redirect: '/HomePage'
    },
    {
      path: '/HomePage', name: 'HomePage', component: HomePageComp
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
        { path: 'test012', name : 'test012Fuck' , component: test_012Comp } ,
        { path: 'test013', name : 'test013Fuck' , component: test_013Comp } ,
        { path: 'test014', name : 'test014Fuck' , component: test_014Comp } , // 自訂 Directive
      ]
    },
    {
      path: '/practice2' , name : 'practice2' , component : practice2Comp ,
      children : [ // 子路由(嵌套路由) , 以下的組件，會被渲染到 parctice2 組件中的 <router-view>
        { path: 'test_jqueryAjax', name: 'jqueryAjax' , component: fetchDataByJqueryAjaxComp } , // ※※※ 當 /practice2/test_jqueryAjax , fetchDataByJqueryAjaxComp 会被渲染在 practice2Comp 的 <router-view> 中
        { path: 'test_Es6FetchApi', name: 'es6FetchApi' , component: fetchDataByEs6FetchAPIComp } ,
        { path: 'test_axios', name: 'axiosApi' , component: fetchDataByAxiosComp } ,
        { path: 'test_axios_filter', name: 'axiosApiWithFilter' , component: fetchData_FilterComp } ,
      ]
    },
    {
      path: '/practice3' , name : 'practice3' , component : practice3Comp ,
      children : [ // 子路由(嵌套路由) , 以下的組件，會被渲染到 parctice3 組件中的 <router-view>
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
    {
      path: '/practice4' , name : 'practice4' , component : practice4Comp ,
      children : [ // 子路由(嵌套路由) , 以下的組件，會被渲染到 parctice4 組件中的 <router-view>
        { path: 'toSlot001', name: 'goSlot001', component: slot001Comp } ,
        { path: 'toSlot002', name: 'goSlot002', component: slot002Comp } ,
        { path: 'toSlot003', name: 'goSlot003', component: slot003Comp } ,
      ]
    },
    {
      path: '/practice5' , name : 'practice5' , component : practice5Comp ,
      children : [ // 子路由(嵌套路由) , 以下的組件，會被渲染到 parctice4 組件中的 <router-view>
        // { path: 'test_jqueryAjax', name: 'jqueryAjax' , component: fetchDataByJqueryAjaxComp } , // ※※※ 當 /practice5/test_jqueryAjax , fetchDataByJqueryAjaxComp 会被渲染在 【practice5Comp】 的 <router-view> 中
        // { path: 'test_Es6FetchApi', name: 'es6FetchApi' , component: fetchDataByEs6FetchAPIComp } ,
        // { path: 'test_axios', name: 'axiosApi' , component: fetchDataByAxiosComp } ,
        // { path: 'toRefData', name: 'goRefData' , component: refDataComp } ,

        //-------------------------------------------------------------------------------------
        // 測試 meta.keepAlive ， 搭配 <router-view v-if="$route.meta.keepAlive"></router-view>
        //-------------------------------------------------------------------------------------
        { path: 'test_jqueryAjax' , component: fetchDataByJqueryAjaxComp, meta: { keepAlive: true /*需要被缓存*/ } } , // ※※※ 當 /practice5/test_jqueryAjax , fetchDataByJqueryAjaxComp 会被渲染在 【practice5Comp】 的 <router-view> 中
        { path: 'test_Es6FetchApi' , component: fetchDataByEs6FetchAPIComp, meta: { keepAlive: false/*不需要被缓存*/ }} ,
        { path: 'test_axios' , component: fetchDataByAxiosComp, meta: { keepAlive: true /*需要被缓存*/ }} ,
        { path: 'toRefData', name: 'goRefData' , component: refDataComp ,  meta: { keepAlive: true /*需要被缓存*/ } } ,
      ]
    },
    {
      path: '/practice6' , name : 'practice6' , component : practice6Comp ,
      children : [ // 子路由(嵌套路由) , 以下的組件，會被渲染到 parctice2 組件中的 <router-view>
        { path: 'toFormComp001', name: 'goFormComp001', component: cformComp001 } ,
        { path: 'toFormComp002', name: 'goFormComp002', component: cformComp002 } ,
        { path: 'toFormComp003', name: 'goFormComp003', component: cformComp003 } ,
        { path: 'toFormComp004', name: 'goFormComp004', component: cformComp004 } ,
        { path: 'toFormComp005', name: 'goFormComp005', component: cformComp005 } ,
      ]
    },
    {
      path: '/practice9' , name : 'practice9' , component : practice9Comp ,
      children : [ // 子路由(嵌套路由) , 以下的組件，會被渲染到 parctice2 組件中的 <router-view>
        { path: 'toFight001', name: 'goFight001', component: fight001Comp } ,
      ]
    },
    { path: '*', redirect: '/' } // 萬用路由(放最後)，以上路由樹都匹配不到時，會進入萬用路由
  ]
})

// router.replace({ path: '/', redirect: '/' });
export default router
