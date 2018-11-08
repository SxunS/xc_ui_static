let {add} = require('./index');
let Vue = require('./vue.min');
let VM = new Vue({
    el:"#app",
    data:{
        name:"计算：",
        number1:0,
        number2:0,
        result:0,
        list:[1,2,3,4,5],
        user:{userName:"tom",age:13},
        userList:[
            {user:{userName:"Jack",age:11}},
            {user:{userName:"John",age:12}}
        ]
    },
    methods:{
        change:function () {
            this.result = add(parseInt(this.number1),parseInt(this.number2));
        }
    }
});