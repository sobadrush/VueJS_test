<template>
  <!-- <div id="main-div">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->

 <div class="wrapper">

        <!-- Header -->
        <app-header></app-header>

        <!-- Sidebar  -->
        <app-sidebar></app-sidebar>

        <!-- Page Content  -->
        <div id="content" style="margin-top:3cm;">

            <!-- ※※※ 路由抽換處 ※※※ -->
            <router-view/>

        </div>
    </div>

</template>

<script>

  // === local-註冊 元件 (1) ===
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
  import fetchDataByJqueryAjaxComp from '@/components/fetchDataByJqueryAjax/fetchDataByJqueryAjax.vue';
  import fetchDataByEs6FetchAPIComp from '@/components/fetchDataByEs6FetchAPI/fetchDataByEs6FetchAPI.vue';
  import fetchDataByAxiosComp from '@/components/fetchDataByAxios/fetchDataByAxios.vue';
  import practice3Comp from '@/components/practice3/practice3.vue';
  import fetchDataByAxiosRouterParamComp from '@/components/fetchDataByAxiosRouterParam/fetchDataByAxiosRouterParam.vue';
  import fetchDataByAxiosRouterParamPropsComp from '@/components/fetchDataByAxiosRouterParamProps/fetchDataByAxiosRouterParamProps.vue';
  import practice4Comp from '@/components/practice4/practice4.vue';
  import practice5Comp from '@/components/practice5/practice5.vue';
  import practice6Comp from '@/components/practice6/practice6.vue';
  //--------
  import practice9Comp from '@/components/practice9/practice9.vue';


  export default {
    name: 'App',
    components: { // === local-註冊 元件 (2) ===
      practiceComp,
      test_001Comp,
      test_002Comp,
      test_003Comp,
      test_004Comp,
      test_005Comp,
      test_006Comp,
      test_007Comp,
      test_008Comp,
      test_009Comp,
      test_010Comp,
      test_011Comp,
      test_012Comp,
      test_013Comp,
      test_014Comp, // 自訂 Directive
      practice2Comp,
      fetchDataByJqueryAjaxComp,
      fetchDataByEs6FetchAPIComp,
      fetchDataByAxiosComp,
      practice3Comp,
      fetchDataByAxiosRouterParamComp,
      fetchDataByAxiosRouterParamPropsComp,
      practice4Comp, // slot 相關
      practice5Comp, // router keep-alive 相關
      practice6Comp,
      practice9Comp, // practice9Comp 下的子路由元件 → 在 practice9Comp 中注入 , fight001
    },
  }
</script>

<style>
  #main-div {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .title-font-style {
    font-family : '微軟正黑體';
    font-weight: bold;
    color: blue;
  }
  .margin-around {
    margin : 0.5cm;
  }
  .text-center {
    text-align: center;
  }
</style>
