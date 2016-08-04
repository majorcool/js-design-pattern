/**
 * Created by wangxin on 16/8/3.
 */
    //单例模式的核心是 确保只有一个实例,并提供全局访问


var CreateDiv = function(html){
    this.html=html;
    this.init();
};
//初始化init方法
CreateDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
};
//引入代理类ProxySingletonCreateDiv,管理单例的逻辑在这儿
var ProxySingletonCreateDiv = (function(){
    var instance;
    return function(html){
        if(!instance) instance = new CreateDiv();
        return instance;
    }
})();

var a = new CreateDiv('name1');
var b = new CreateDiv('name2');
console.log(a===b);
//------------------------------------
//another example
