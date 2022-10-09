
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




// depth first search, requires a STACK data structure

// const treeIncludesDepthFirst = (root, target) => {
//   let treeIncludesTarget = false;
//   const stack = [root];
//   const values = [];
//   while(stack.length > 0) {
//     const current = stack.pop();



//     if(current) {

//       const left = current.left;
//       const right = current.right;


//       values.push(current.val);
//       if(current.val === target) {
//         treeIncludesTarget = true;
//         return treeIncludesTarget;
//       }


//       if(left) {
//         stack.push(left)

//       };
//       if(right) {
//         stack.push(right)
//       };

//     }
//   }

//   return treeIncludesTarget;
// }

const treeIncludesRecursiveDepthFirst = (root, target) => {
  if(root === null) return false;
  if(root.val === target) return true;

  return  treeIncludesRecursiveDepthFirst(root.left, target) || treeIncludesRecursiveDepthFirst(root.right, target);
}


console.log(treeIncludesRecursiveDepthFirst(a, 'f'))
console.log(treeIncludesRecursiveDepthFirst(a, 'c'))
console.log(treeIncludesRecursiveDepthFirst(a, 'g'))



// breadth first search, requires a Que data structure
const treeIncludesBreadthFirst = (root, target) => {
  const que = [root];
  const results = [];

  while(que.length > 0) {
    const current = que.shift();
    results.push(current.val);

    if(current) {

      if(current.val === target) return true
      const left = current.left;
      const right = current.right;
  
      if(left) que.push(current.left);
      if(right) que.push(current.right);
    }
  }

  return false;

}


// console.log(treeIncludesBreadthFirst(a, 'f'));
// console.log(treeIncludesBreadthFirst(a, 'c'));
// console.log(treeIncludesBreadthFirst(a, 'a'));
// console.log(treeIncludesBreadthFirst(a, 'g'));