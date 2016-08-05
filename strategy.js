/**
 * Created by wangxin on 16/8/5.
 */
//模仿传统面向对象的strategy pattern
//封装策略类,这是变化的部分
var performanceS = function(){};
performanceS.prototype.calculate = function(salary){
    return salary * 4;
}
var performanceA = function(){};
performanceA.prototype.calculate = function(salary){
    return salary * 3;
}
var performanceB = function(){};
performanceB.prototype.calculate = function(salary){
    return salary * 2;
}


//奖金类 Bonus
var Bonus = function(){
    this.strategy = null;
    this.salary = null;
};
Bonus.prototype.setStrategy = function(strategy){
    this.strategy =  strategy;
};
Bonus.prototype.setSalary = function(salary){
    this.salary = salary;
};
Bonus.prototype.getBonus = function(){
    return this.strategy.calculate(this.salary);
};

var bonus = new Bonus();
bonus.setSalary(2400);
bonus.setStrategy(new performanceS());
console.log(bonus.getBonus());

//-------------------------------------------
//javascript中策略模式的实现
//javascript中函数也是对象,直接将strategy对象定义为函数
var strategies = {
    "S": function(salary){
        return salary * 4;
    },
    "A": function(salary){
        return salary * 3;
    },
    "B": function(salary){
        return salary * 2;
    }
};
//calculateBonus作为Context来接受用户的请求
var calculateBonus = function(level, salary){
    return strategies[level](salary);
};
console.log(calculateBonus("A",2000));
console.log(calculateBonus("S",3400));
