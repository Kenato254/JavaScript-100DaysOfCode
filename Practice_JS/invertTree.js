  function invertTree(node) {
    if (node === null) {
      return;
    }
    const temp = node.firstElementChild;
    node.firstElement = node.lastElementChild;
    node.lastElementChild = temp;
    
    invertTree(node.firstElementChild)
    invertTree(node.lastElementChild)
  }
invertTree(root)

