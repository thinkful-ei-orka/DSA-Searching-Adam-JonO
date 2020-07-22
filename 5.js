const BinarySearchTree = require('./BinarySearchTree');

const dataset = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
const tree = new BinarySearchTree;
dataset.forEach(value => tree.insert(value, value));

console.log('pre order');
tree.preOrder();
console.log();
console.log('in order');
tree.inOrder();
console.log();
console.log('post order');
tree.postOrder();