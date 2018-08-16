<template>

  <div id="fuck">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->

    <!-- ============================================== -->
    <!-- ============================================== -->
    <!-- ============================================== -->

    <div class="layout-container">
      <!-- top navbar-->

      <app-header></app-header>

      <!-- sidebar-->

      <app-sidebar></app-sidebar>

      <!-- Main section-->
      <main class="main-container">
        <!-- Page content-->
        <section>
          <div class="container container-lg">
            <div class="row">
              <div class="col-lg-8 col-xs-12">
                <div class="row">
                  <div class="col-sm-6 col-xs-12">

                    【父層的資料】
                    <pre>{{parentData}}</pre>

                    <!-- ========================================== -->
                    <!-- ============== Card Start================= -->
                    <!-- ========================================== -->
                    <app-card v-for="(item, index) in parentData" :key="index" :myCardTitle="item.season" :myCardBgColor="item.bkColor"></app-card>
                    <!-- ========================================== -->
                    <!-- ============== Card End================= -->
                    <!-- ========================================== -->
                  </div>
                  <div class="col-sm-6 col-xs-12">
                    <div class="card">
                      <div class="card-heading bg-primary">
                        <div class="card-title">Paracosm</div>
                      </div>
                      <div class="card-offset">
                        <div class="card-offset-item text-right">
                          <button type="button" class="btn-raised btn btn-info btn-circle btn-lg"><em class="ion-android-add"></em></button>
                        </div>
                      </div>
                      <div class="card-body pt0">
                        <p class="mb-sm">Cras rutrum scelerisque auctor. Donec ultricies blandit venenatis. Nulla facilisi. Praesent diam diam, venenatis lorem par.</p>
                      </div>
                      <div class="card-footer">
                        <button type="button" class="btn btn-flat btn-default">Action 1</button>
                        <button type="button" class="btn btn-flat btn-default">Action 2</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Large card-->
            <div class="card">
              <div class="card-heading">
                <!-- START dropdown-->
                <div class="pull-right dropdown">
                  <button type="button" data-toggle="dropdown" class="btn btn-default btn-flat btn-flat-icon"><em class="ion-android-more-vertical"></em></button>
                  <ul role="menu" class="dropdown-menu md-dropdown-menu dropdown-menu-right">
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                  </ul>
                </div>
                <!-- END dropdown-->
              </div>
              <div class="card-body pt0">
                <h3 class="mt0">Technology</h3>
                <p>Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse. Pariatur occaecat nisi laboris tempor laboris eiusmod qui id Lorem esse commodo in. Exercitation aute dolore deserunt culpa consequat elit labore incididunt elit anim.</p>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-flat btn-primary">Read More</button>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6 col-xs-12">
                <div class="card">
                  <div class="card-item"><img src="../static/assets/img/pic3.jpg" alt="MaterialImg" class="fw img-responsive"></div>
                  <div class="card-body">
                    <h4 class="mt0">Freedom in the air</h4>
                    <p class="m0">Nunc vitae ipsum elit, non lacinia dui. Sed tempor lacinia tempus. Etiam eget congue nulla. Sed quis eros libero, a euismod nisl.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-xs-12">
                <div class="card">
                  <div class="card-item"><img src="../static/assets/img/pic2.jpg" alt="MaterialImg" class="fw img-responsive"></div>
                  <div class="card-body">
                    <h4 class="mt0">Mountain lake</h4>
                    <p>Cras et dui non erat ornare ornare eget non sapien.</p>
                    <div class="text-right">
                      <button type="button" class="btn btn-flat btn-primary">Share</button>
                      <button type="button" class="btn btn-flat btn-primary">More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-xs-12">
                <div class="card">
                  <div class="card-item"><img src="../static/assets/img/pic1.jpg" alt="MaterialImg" class="fw img-responsive">
                    <div class="card-item-text"><a href="#" class="link-white"><em class="ion-map mr icon-lg"></em></a><a href="#" class="link-white"><em class="ion-ios-heart-outline mr icon-lg"></em></a><a href="#" class="link-white"><em class="ion-image icon-lg"></em></a></div>
                  </div>
                  <div class="card-body">
                    <h4 class="mt0">Forest trip</h4>
                    <p>Nullam quis lorem a est auctor venenatis vel vitae ipsum.</p>
                    <hr>
                    <div class="clearfix">
                      <div class="pull-left"><span class="mr-sm text-muted">by</span><a href="#">Bonnie</a></div>
                      <div class="pull-right text-muted"><em class="ion-android-time mr-sm"></em><span>a week ago</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-xs-12">
                <div class="card">
                  <div class="card-item"><img src="../static/assets/img/pic4.jpg" alt="MaterialImg" class="fw img-responsive">
                    <p class="card-item-text">Picture.png</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-xs-12">
                <div class="card">
                  <div class="card-item"><img src="../static/assets/img/pic1.jpg" alt="MaterialImg" class="fw img-responsive">
                    <p class="card-item-text">Image.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Page footer-->
        <footer><span>2017 - Centric app.</span></footer>
      </main>
    </div>
    <!-- Search template-->
    <div tabindex="-1" role="dialog" class="modal modal-top fade modal-search">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="pull-left">
              <button type="button" data-dismiss="modal" class="btn btn-flat"><em class="ion-arrow-left-c icon-24"></em></button>
            </div>
            <div class="pull-right">
              <button type="button" class="btn btn-flat"><em class="ion-android-microphone icon-24"></em></button>
            </div>
            <form action="#" class="oh">
              <div class="mda-form-control pt0">
                <input type="text" placeholder="Search.." data-localize="header.SEARCH" class="form-control header-input-search">
                <div class="mda-form-control-line"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End Search template-->
    <!-- Settings template-->
    <div tabindex="-1" role="dialog" class="modal-settings modal modal-right fade">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <div data-dismiss="modal" class="pull-right clickable"><em class="ion-close-round text-soft"></em></div>
            <h4 class="modal-title"><span>Settings</span></h4>
          </div>
          <div class="modal-body">
            <div class="clearfix mb">
              <div class="pull-left wd-tiny mb">
                <div class="setting-color">
                  <label class="preview-theme-1">
                    <input type="radio" checked="checked" name="setting-theme" value="0"><span class="ion-checkmark-round"></span>
                    <div class="t-grid">
                      <div class="t-row">
                        <div class="t-col preview-header"></div>
                        <div class="t-col preview-sidebar"></div>
                        <div class="t-col preview-content"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="pull-left wd-tiny mb">
                <div class="setting-color">
                  <label class="preview-theme-2">
                    <input type="radio" name="setting-theme" value="1"><span class="ion-checkmark-round"></span>
                    <div class="t-grid">
                      <div class="t-row">
                        <div class="t-col preview-header"></div>
                        <div class="t-col preview-sidebar"></div>
                        <div class="t-col preview-content"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="pull-left wd-tiny mb">
                <div class="setting-color">
                  <label class="preview-theme-3">
                    <input type="radio" name="setting-theme" value="2"><span class="ion-checkmark-round"></span>
                    <div class="t-grid">
                      <div class="t-row">
                        <div class="t-col preview-header"></div>
                        <div class="t-col preview-sidebar"></div>
                        <div class="t-col preview-content"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="pull-left wd-tiny mb">
                <div class="setting-color">
                  <label class="preview-theme-4">
                    <input type="radio" name="setting-theme" value="3"><span class="ion-checkmark-round"></span>
                    <div class="t-grid">
                      <div class="t-row">
                        <div class="t-col preview-header"></div>
                        <div class="t-col preview-sidebar"></div>
                        <div class="t-col preview-content"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="pull-left wd-tiny mb">
                <div class="setting-color">
                  <label class="preview-theme-5">
                    <input type="radio" name="setting-theme" value="4"><span class="ion-checkmark-round"></span>
                    <div class="t-grid">
                      <div class="t-row">
                        <div class="t-col preview-header"></div>
                        <div class="t-col preview-sidebar"></div>
                        <div class="t-col preview-content"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="pull-left wd-tiny mb">
                <div class="setting-color">
                  <label class="preview-theme-6">
                    <input type="radio" name="setting-theme" value="5"><span class="ion-checkmark-round"></span>
                    <div class="t-grid">
                      <div class="t-row">
                        <div class="t-col preview-header"></div>
                        <div class="t-col preview-sidebar"></div>
                        <div class="t-col preview-content"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="pull-left wd-tiny mb">
                <div class="setting-color">
                  <label class="preview-theme-7">
                    <input type="radio" name="setting-theme" value="6"><span class="ion-checkmark-round"></span>
                    <div class="t-grid">
                      <div class="t-row">
                        <div class="t-col preview-header"></div>
                        <div class="t-col preview-sidebar"></div>
                        <div class="t-col preview-content"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="pull-left wd-tiny mb">
                <div class="setting-color">
                  <label class="preview-theme-8">
                    <input type="radio" name="setting-theme" value="7"><span class="ion-checkmark-round"></span>
                    <div class="t-grid">
                      <div class="t-row">
                        <div class="t-col preview-header"></div>
                        <div class="t-col preview-sidebar"></div>
                        <div class="t-col preview-content"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="pull-left wd-tiny mb">
                <div class="setting-color">
                  <label class="preview-theme-9">
                    <input type="radio" name="setting-theme" value="8"><span class="ion-checkmark-round"></span>
                    <div class="t-grid">
                      <div class="t-row">
                        <div class="t-col preview-header"></div>
                        <div class="t-col preview-sidebar"></div>
                        <div class="t-col preview-content"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <hr>
            <p>
              <label class="mda-checkbox">
                <input id="sidebar-showheader" type="checkbox" checked=""><em class="bg-indigo-500"></em>Sidebar header
              </label>
            </p>
            <p>
              <label class="mda-checkbox">
                <input id="sidebar-showtoolbar" type="checkbox" checked=""><em class="bg-indigo-500"></em>Sidebar toolbar
              </label>
            </p>
            <p>
              <label class="mda-checkbox">
                <input id="sidebar-offcanvas" type="checkbox"><em class="bg-indigo-500"></em>Sidebar offcanvas
              </label>
            </p>
            <hr>
            <p>Navigation icon</p>
            <p>
              <label class="mda-radio">
                <input type="radio" name="headerMenulink" value="menu-link-close"><em class="bg-indigo-500"></em>Close icon
              </label>
            </p>
            <p>
              <label class="mda-radio">
                <input type="radio" checked="" name="headerMenulink" value="menu-link-slide"><em class="bg-indigo-500"></em>Slide arrow
              </label>
            </p>
            <p>
              <label class="mda-radio">
                <input type="radio" name="headerMenulink" value="menu-link-arrow"><em class="bg-indigo-500"></em>Big arrow
              </label>
            </p>
            <hr>
            <button type="button" data-toggle-fullscreen="" class="btn btn-default btn-raised">Toggle fullscreen</button>
            <hr>
            <p>Change language</p>
            <!-- START Language list-->
            <div class="btn-group">
              <button type="button" data-toggle="dropdown" class="btn btn-default btn-block btn-raised">English</button>
              <ul role="menu" class="dropdown-menu dropdown-menu-right animated fadeInUpShort">
                <li><a href="#" data-set-lang="en">English</a></li>
                <li><a href="#" data-set-lang="es">Spanish</a></li>
              </ul>
            </div>
            <!-- END Language list-->
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================== -->
    <!-- ============================================== -->
    <!-- ============================================== -->
  </div>

</template>


<script>
  import header from './components/header/header.vue'
  import sidebar from './components/sidebar/sidebar.vue'
  import myCard from './components/myCard/myCard.vue'

  export default {
    name: "App" ,
    components: {
      'app-header' : header,
      'app-sidebar': sidebar,
      'app-card'   : myCard
    },
    data() {
      return {
        parentData : [
          { 'season' : 'Spring' , 'bkColor' : 'red'  },
          { 'season' : 'Summer' , 'bkColor' : 'green'},
          { 'season' : 'Fall'   , 'bkColor' : 'blue' },
          { 'season' : 'Winter' , 'bkColor' : 'brown'},
        ]
      }
    },
  };

</script>

<style>
  /* #fuck {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
</style>
