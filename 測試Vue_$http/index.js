var $myApp = new Vue({
    el: '#myApp',
    data: {
        cityId: 1,
        cityName: undefined,
        gridColumnNames: ['流水號', 'cwb_id', '區名', '經度', '緯度'],
        gridData: [],
        // apiUrl: 'http://211.149.193.19:8080/api/customers'
    },
    mounted: function () {
        console.warn("mounted , 加載完成!");

        this.doFetchData().then((resp) => {
            console.log('SUCCESS resp.data.towns >>> ', resp.data.towns);
            this.gridData = resp.data.towns;
            this.cityName = resp.data.name;
        }).catch((err) => {
            console.log('FAIL >>> ', err);
        });
    },
    methods: {
        doAlert: function (event) {
            console.log('event', event);
            alert('TEST_TEST_TEST');
            return;
        },
        doClick: function () {
            // this.gridData = this.doFetchData();
            // return;

            this.doFetchData().then((resp) => {
                console.log('SUCCESS resp.data.towns >>> ', resp.data.towns);
                this.gridData = resp.data.towns;
            }).catch((err) => {
                console.log('FAIL >>> ', err);
            });
        },
        doGetCityName: function () {
            this.doFetchData().then((resp) => {
                // console.log('SUCCESS response.data >>> ', resp.data);
                this.cityName = resp.data.name;
            }).catch((err) => {
                console.log('FAIL >>> ', err);
            });
        },
        doFetchData: function (e) {
            let _cityId = this.cityId;
            let apiUrl = `https://works.ioa.tw/weather/api/cates/${_cityId}.json`;
            return this.$http.get(apiUrl);
        }
    }
});