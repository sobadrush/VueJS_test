import Vue from 'vue';

Vue.directive('myFocus' /* html中要用 my-focus */, {
  // === 【Event-Hook】 ===
  inserted: function (el) { // >>> 當绑定元素插入到 DOM 中 <<<
    // console.log(' el >>> ' , el);
    el.focus(); // 聚焦元素
    el.placeholder = "藉由Vue自訂指令，onFocus在本 <input>上 ";
  }
});

Vue.directive('fucker', {
    bind: function (el, binding, vnode, oldVnode) {
    // console.log(' el >>> ' , el);
    // console.log(' binding >>> ' , binding);
    // console.log(' vnode >>> ' , vnode);
    // console.log(' oldVnode >>> ' , oldVnode);
    //-----------------------------------
    let sFunc = JSON.stringify;
    el.innerHTML =
      'name: '       + sFunc(binding.name) + '<br>' +
      'value type: ' + typeof binding.value + '<br>' +
      'value: '      + binding.value + '<br>' +
      'expression: ' + sFunc(binding.expression) + '<br>' +
      'argument: '   + sFunc(binding.arg) + '<br>' +
      'modifiers: '  + sFunc(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ');
  }
});

Vue.directive('my-for-each', {
    bind: function (el, binding, vnode, oldVnode) {
      // console.log(' el >>> ' , el);
      // console.log(' binding >>> ' , binding);
      // console.log(' binding.value >>> ' , binding.value);
      // console.log(' vnode >>> ' , vnode);
      // console.log(' oldVnode >>> ' , oldVnode);
      //-------------------------------------------

      let dataArr = binding.value;
      dataArr.forEach(item => {
          //console.log( 'item >>> ' , item);
          $(`<table style="margin:5px" border="2">
              <tbody>
                <tr>
                  <td>${ item.empName }</td>
                  <td>${ item.empAge }</td>
                  <td>${ item.empSex }</td>
                </tr>
              </tbody>
            </table>`).appendTo( $(el) );
      });

    }
});

export default {
  name: 'test-014',
  components: {},
  props: [],
  data () {
    return {
      empDataList
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}



let picBase64Array = [
  'static/assest/img/doraemon/企鵝.png',
  'static/assest/img/doraemon/大雄.jpg',
  'static/assest/img/doraemon/小叮噹.jpg',
  'static/assest/img/doraemon/小夫.jpg',
  'static/assest/img/doraemon/白狼.jpg',
  'static/assest/img/doraemon/技安.jpg',
  'static/assest/img/doraemon/靜香.jpg',
];

let empDataList = [
  { empName: 'Roger' , empAge: 18  , empSex: 'male'   , picUrl : picBase64Array[0] },
  { empName: 'Kelly' , empAge: 23  , empSex: 'female' , picUrl : picBase64Array[1] },
  { empName: 'Linda' , empAge: 15  , empSex: 'female' , picUrl : picBase64Array[2] },
  { empName: 'Scott' , empAge: 28  , empSex: 'male'   , picUrl : picBase64Array[3] },
  { empName: 'Benson', empAge: 18  , empSex: 'female' , picUrl : picBase64Array[4] },
  { empName: 'Roy'   , empAge: 11  , empSex: 'female' , picUrl : picBase64Array[5] },
  { empName: 'Frank' , empAge: 32  , empSex: 'male'   , picUrl : picBase64Array[6] },
];
