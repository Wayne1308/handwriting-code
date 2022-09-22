/**
 * instanceof函数的实现
 * @param target 要检测的对象
 * @param classFunc 当前(类 || 构造函数)的原型
 * @describe 实例._ptoto_ === (类 || 构造函数).prototype
 *
 * 步骤一：先取得当前类或构造函数的原型、当前实例对象的原型链
 * 步骤二：一直循环取实例的原型链的值(_ptoto_)，跟类的原型(prototype)对比，找到返回true，找不到返回false
 */
function _instanceof(target, classFunc) {
    // intanceof 只检测对象
    if (typeof target !== 'object' || target === null) return false;

    var ptoto = Object.getPrototypeOf(target); // Object.getPrototypeOf() 方法拿到当前实例的_ptoto_值(即构造函数的prototype值)

    while (true) {

        if (ptoto === null) return false; // 找不到返回false

        if (ptoto === classFunc.prototype) return true; // 找到了返回true

        ptoto = Object.getPrototypeOf(ptoto); // 循环拿到当前实例的_ptoto_
    }
}
// 测试
console.log(_instanceof({}, Object), {} instanceof Object);  // true true
console.log(_instanceof([], Array), [] instanceof Array);  // true true
console.log(_instanceof('test', Array), 'test' instanceof Array);  // false false
console.log(_instanceof(null, Array), null instanceof Array);  // false false
