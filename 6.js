//preorder
const BinarySearchTree = require('./BinarySearchTree');
const { Queue } = require('./Stack');

const officers = [[5, 'Captain Picard'], [3, 'Commander Riker'], [6, 'Commander Data'], [2, 'Lt. Cmdr. Worf'], [4, 'Lt. Cmdr. LaForge'], [8, 'Lt Cmder Crusher'], [1, 'Lieutenant security-officer'], [7, 'Lieutenant Selar']];
const commandStructure = new BinarySearchTree;
officers.forEach(officer => commandStructure.insert(officer[0], officer[1]));

function chainOfCommand(tree, values = []) {
  const queue = new Queue();
  const node = tree;
  
  queue.enqueue(node);

  while (queue.first!==null) {
    const node = queue.dequeue();
    values.push(node.value);
  
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }

  return values;
}

console.log(chainOfCommand(commandStructure));