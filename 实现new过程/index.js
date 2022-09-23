/**
 * _new 实现new
 * @param {Function} fn 构造函数 
 * @param  {...any} args 传入的参数 
 * 
 * @describe 
 * 一：创建一个新对象，并将对象的_ptoto_指向构造函数的prototype
 * 二：执行构造函数，并使用call/ apply 改变this的指向
 * 三：返回值为object则返回，否则返回上述生成的新对象
 */
function _new(fn, ...args) {

  // 创建一个新对象newObj，将newObj的_ptoto_指向fn的prototype;
  const newObj = Object.create(fn.prototype);

  // 执行 fn 并将fn的属性添加到 newObj 上，并获取fn执行的结果
  const res = fn.apply(newObj, [...args]);

  // 如果fn执行的结果为对象，则返回该对象，否则返回newObj
  return typeof res === 'object' ? res : newObj;
}

// 测试
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function() {
  console.log(`Hello World ${this.name} ${this.age}！`);
}
const mine = _new(Person, 'test', 100);
mine.say();