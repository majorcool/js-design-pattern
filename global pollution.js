/**
 * Created by wangxin on 16/8/4.
 */
//减少全局变量的使用,有如下几种方式
//1. 使用命名空间
//使用命名空间,并不会杜绝全局变量,但是可以减少全局变量
//最简单的方式就是 对象字面量
var namespace1 = {
    //把a和b都定义为对象的属性,减少变量与全局作用域打交道的机会
    a:function(){
        console.log(1);
    },
    b:function(){
        console.log(2);
    }
};
//还可以动态地创建命名空间
var MyApp = {};
MyApp.namespace = function(name){
    var parts = name.split(".");
    var current = MyApp;
    for (var i in parts){
        //i是数组下标,是数字
        if(!current[parts[i]]) current[parts[i]]={};
        current = current[parts[i]];
    }
};
MyApp.namespace('event');
MyApp.namespace('dom.style');

console.dir(MyApp);

//2.使用闭包封装私有变量

var User = (function(){
    var _name = 'wx';
    var _age = 20;
    return {
        getUserInfo: function () {
            console.log( this._name + " " + this._age);
            return _name+"-"+_age;
        }
    }
})();
