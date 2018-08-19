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

  export default {
    name: 'App',
    components: { // === local-註冊 元件 (2) ===
      practiceComp,
      test_001Comp,
      test_002Comp,
      test_003Comp,
    }
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
</style>
