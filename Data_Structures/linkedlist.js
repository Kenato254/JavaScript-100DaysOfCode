class Node {
    //! Node Factory
    constructor(data=null, next_node=null) {
        this.data = data;
        this.next_node = next_node
    }
}

class LinkedList {
    //! Data Structures -> Linked list implementation
    custructor() {
        this.head = null
    }
    set_first_node(value) {
        //! Method to set first node in this list
        this.head = new Node(value, this.head);
        return this.head;
    }
    get_first_node() {
        //! Method to get first node in the list
        return this.head.data;
    }
    set_last_node(value) {
        //! Method to set last node
        if(this.head === null) {
            this.head = new Node(value);
        }
        let existing_node = this.head;
        while(existing_node.next_node) {
            existing_node = existing_node.next_node;
        } 
        existing_node.next_node = new Node(value);
    }
    get_last_node_in_list() {
        //! Method to return last node in the list
        if(this.head === null) {
            return null;
        }
        let existing_node = this.head;
        while(existing_node.next_node) {
            existing_node = existing_node.next_node;
        }
        return existing_node.data;
    }
    get_node_list() {
        //! Method to print the entire linked list nodes
        if(this.head === null) {
            console.log(0);
        }
        let existing_node = this.head;
        const nodeList = [];
        while(existing_node) {
            nodeList.push(existing_node.data);
            existing_node = existing_node.next_node;
        }
        return nodeList;
    }
}

let list = new LinkedList();
list.set_first_node(100);
list.set_last_node(200)
list.set_last_node(0)
list.set_last_node(5200)
list.set_last_node(650)
// let first = list.get_last_node_in_list();
// console.log(first);
console.log(list.get_node_list().join(' => '));
