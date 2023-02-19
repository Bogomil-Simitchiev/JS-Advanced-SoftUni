function extensibleObject() {
    const obj = {};
    obj.__proto__ = {};

    obj.extend = function (template) {
        for (let prop in template) {
            if (typeof template[prop] === 'function') {
                obj.__proto__[prop] = template[prop];
            } else {
                obj[prop] = template[prop];
            }
        }
    };

    return obj;
}

const myObj = extensibleObject();
console.log(myObj);

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(Object.getPrototypeOf(myObj));
console.log(myObj);
