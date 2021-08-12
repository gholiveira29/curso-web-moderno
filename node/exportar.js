console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;

exports = null;
console.log(module.exports);

exports = {
    nomw: 'teste'
};

console.log(module.exports);

module.exports = {publico: true};