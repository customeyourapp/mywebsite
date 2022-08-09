const readme = Vue.component('',{
    template:'#readme-template',
    data(){
        return{
            introduction :'主要做安卓APP,Java相关和前后端。下面是之前做过的项目，需要写英文报告的也没问题',
            contact : {
                qq : '1587915719',
                email : '1587915719@qq.com'
            }

        }
    }
})
const areWeThereYet = Vue.component('',{
    template:'#project-template',
    data(){
        return {
            title:'Are we there yet',
            describeLists:[
                {describe:'基于安卓的单页面程序'},
                {describe:'使用Location Listener服务获取当前位置'},
                {describe:'根据输入的经纬度计算与当前位置的距离'},
                {describe:'将指定位置保存到Options Menu'},
                {describe:'使用谷歌地图的API导航到指定位置'},
            ],
            demandEN: 'The program is going to have to keep track of the following information:\n\n' +
                'Where we currently are (latitude and longitude)\n' +
                'Do we have valid latitude and longitude data?\n' +
                'Where is the location we want to know how far we are from?\n' +
                'What is the address of the location we want to know how far we are from?\n\n' +
                'This tells us what some member variables for this program are going to be.\n\n\n' +
                'There were several tasks I asked you to take care of during the tutorial. Be sure you have completed all of them. They are:\n\n' +
                'The Layout\n' +
                'The setUI() function\n' +
                'Computing the distance between two coordinates\n' +
                'Saving the new address to preferences\n' +
                'Adding your home coordinates to the program\n' +
                'Getting the call to newLocation() to work (Don\'t for get to call this method when the location changes as well).\n\n' +
                'Once you have the above tasks completed you are ready for the final task.',
            imgList:[
                {src:'../static/img/Are we there yet1.png'},
            ]
        }
    }
})

const game2048 = Vue.component('',{
    template: '#project-template',
    data() {
        return {
            title:'2048游戏',
            describeLists: [
                {describe: '初始时生成两个方块'},
                {describe: '用户上下左右滑动时向对应方向移动方块'},
                {describe: '相同值的方块相碰后合并'},
                {describe: '每次移动方块都产生一个新的方块'},
                {describe: '方块合并后计算对应分值'},
                {describe: '识别有效操作和无效操作'},
                {describe: '重新开始游戏'},
            ],
            demandEN: '很久之前做的，找不到了',
            imgList: [
                {src: '../static/img/game2048-1.png'},
                {src: '../static/img/game2048-2.png'},
            ]
        }
    }
})

const cruddyPizza = Vue.component('',{
    template: '#project-template',
    data(){
        return{
            title : 'Cruddy pizza',
            describeLists:[
                {describe:'使用SQLite数据持久化'},
                {describe:'使用Shared Preferences存储UI数据'},
                {describe:'Pizza订单增删查改'},
                {describe:'APP国际化，支持英语法语随系统切换'},
            ],
            demandEN:'This Cruddy Pizza assignment is primarily intended for students to demonstrate their knowledge of:\n' +
                '•\tData persistence using SQLite (Order Info).\n' +
                '•\tData persistence using Shared Preferences (Bilingual UI Settings).\n' +
                '•\tString Arrays\n' +
                '•\tUI design and internationalization\n' +
                'This application will display a list of options for building a pizza. Once the order is finished it is to be saved (created). Additional functionality will allow the user to display all orders (read), a specific order (read), modify the order (update), and cancel the order (delete). Let the user know when each operation is complete. The UI is to be able to be switched between English and French and maintain state on that setting between start-ups.',
            imgList:[
                {src:'../static/img/Cruddy pizza1.png'},
                {src:'../static/img/Cruddy pizza2.png'},
                {src:'../static/img/Cruddy pizza3.png'}
            ]
        }
    }
})

const router = new VueRouter({
    routes:[
        {path:'/areWeThereYet',component:areWeThereYet},
        {path:'/game2048',component: game2048},
        {path:'/cruddyPizza',component: cruddyPizza},
        {path: '/readme',component: readme}
    ]
})
const vm = new Vue({
    el:'#app',
    router:router,
    data:{
        selectIndex : 0,
    },
    methods:{
        handleOpen(key, keyPath){
            vm.selectIndex = key
            console.log(key, keyPath)
        },
        handleClose(key, keyPath){
            vm.selectIndex = 0
            console.log(key, keyPath)
        },
        clickMenu(){

        }
    }
}).$mount('#app')