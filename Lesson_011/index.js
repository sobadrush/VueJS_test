var $myApp = new Vue({
    el: '#myApp',
    data: {
        isActive: true
    },
    mounted: function () {
        alert("mounted , 加载完成");
    },
    methods: {
        doClick: function (e) {
            console.log('e.target >>> ' , e.target);
            console.log('this.isActive >>> ', this.isActive);
            this.isActive = !this.isActive;
        },
    }
});