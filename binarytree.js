class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

// Debth First needs a stack data structure
const debthFistTreee = (node) => {
  const stack = [node];
  let result = [];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current) {
      const left = current.left;
      const right = current.right;
      result.push(current.val);

      if (right) {
        stack.push(right);
      }

      if (left) {
        stack.push(left);
      }
    }
  }

  return result;
};
const debthFistTreeeRecursive = (root) => {
  if (root === null) return [];

  const left = debthFistTreeeRecursive(root.left);
  const right = debthFistTreeeRecursive(root.right);
  return [...root.val, ...left, ...right];
};
console.log({ debtFirst: debthFistTreee(a) });
// console.log(debthFistTreeeRecursive(a));

const breadthFirstTree = (root) => {
  const que = [root];
  const temp = [];

  while (que.length > 0) {
    const current = que.shift();

    temp.push(current);

    if (current) {
      const left = current.left;
      const right = current.right;

      if (left) {
        que.push(current.left);
      }

      if (right) {
        que.push(right);
      }
    }
  }

  return temp;
};

// RECUSIONS NOT A GOOD APPROACH WITH BREATH FIRST TREE;