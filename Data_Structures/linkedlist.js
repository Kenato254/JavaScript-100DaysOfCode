class Node {
  //! Node Factory
  constructor(data = null, next_node = null) {
    this.data = data;
    this.next_node = next_node;
  }
}

class LinkedList {
  //! Data Structures -> Linked list implementation
  custructor() {
    this.head = null;
  }
  set_first_node(value) {
    //! Method to set first node in this list
    this.head = new Node(value, this.head);
    return this.head;
  }
  get_first_node() {
    //! Method to get first node in the list
    return this.head;
  }
  set_last_node(value) {
    //! Method to set last node
    if (this.head === null) {
      this.head = new Node(value);
    }
    let current_node = this.head;
    while (current_node.next_node) {
      current_node = current_node.next_node;
    }
    current_node.next_node = new Node(value);
  }
  get_last_node_in_list() {
    //! Method to return last node in the list
    if (this.head === null) {
      return null;
    }
    let current_node = this.head;
    while (current_node.next_node) {
      current_node = current_node.next_node;
    }
    return current_node.data;
  }
  get_node_list() {
    //! Method to print the entire linked list nodes
    if (this.head === null) {
      console.log("List is empty");
    }
    let current_node = this.head;
    const nodeList = [];
    while (current_node) {
      nodeList.push(current_node.data);
      current_node = current_node.next_node;
    }
    return nodeList;
  }
  get_reversed_node_list() {
    //! Method to reverse Linked List using loops
    if (this.head === null) {
      console.log("List is empty");
    }
    let current_node = this.head;
    let previous_node = null;

    while (current_node) {
      let next = current_node.next_node;
      current_node.next_node = previous_node;
      previous_node = current_node;
      current_node = next;
    }
    return previous_node;
  }
  traverse(variable) {
    if ((variable === null) | undefined) {
      console.log("List is empty");
    }
    const nodeList = [];
    while (variable) {
      nodeList.push(variable.data);
      variable = variable.next_node;
    }
    return nodeList;
  }
  get_reversed_recursively(node, previous_node=null) {
    if(node === null) {
        return previous_node;
    }
    let next_ = node.next_node;
    node.next_node = previous_node;
    previous_node = node;
    node = next_;
    return this.get_reversed_recursively(node, previous_node);
  }
}

let list = new LinkedList();
list.set_first_node(100);
list.set_last_node(200);
list.set_last_node(0);
list.set_last_node(5200);
list.set_last_node(650);
// let first = list.get_last_node_in_list();
// console.log(first);
console.log("Before");
console.log(list.get_node_list().join(" => "));
console.log("After");
// let reversed = list.get_reversed_node_list();
let reversed = list.get_reversed_recursively(list.get_first_node());
console.log(list.traverse(reversed).join(" => "));
