export default {
  name: 'test-002',
  components: {},
  props: [],
  data() {
    return {
      myFavoriteGame: {
        name: '龍珠超宇宙2'
      }
    }
  },
  computed: {

  },
  created() {
    console.log('%c%s' , 'color:red' , '>>>>>>>>>> test_002 Created <<<<<<<<<');
  },
  mounted() {
    console.log('%c%s' , 'color:green' , '>>>>>>>>>> test_002 mounted <<<<<<<<<');

    // 當建立test002元件，有myInput1時，才註冊此事件
    let myInput1 = document.querySelector('#myInput1');
    myInput1.addEventListener("keyup", function (e) {
      console.log('this = ', this);
      console.log('key in value = ', this.value);
      let text = this.value;

      let mySpan = $(this).next()[0];
      console.log('mySpan >>> ', mySpan);
      mySpan.innerText = text;
    });
  },
  methods: {

  }
}
