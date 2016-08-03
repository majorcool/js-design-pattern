/**
 * Created by wangxin on 16/8/3.
 */
var CreateDiv = (function(){
        var instance;
        var CreateDiv = function(html){
            if(instance){
                return instance;
            }
            this.html = html;
            this.init();
            return instance = this;
        };
        //初始化init方法
        CreateDiv.prototype.init = function(){
            var div = document.createElement('div');
            div.innerHTML = this.html;
            document.body.appendChild(div);
        };
        return CreateDiv;
    }
)();
var a = new CreateDiv('name1');
var b = new CreateDiv('name2');
console.log(a===b);
