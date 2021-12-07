class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  const reverse_sub_list = function(head, p, q) {
    let end_of_left_segment = head;
    let i=1;
    while (i<p-1) {
        i++;
        end_of_left_segment = end_of_left_segment.next;
    }
    let start_of_right_segment = null;
    let previous = null;
    let current = end_of_left_segment.next;
    let j = p;
    while (j <= q) {
        j++;
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        if (j==q) {
            start_of_right_segment = current.next;
        }
    }
    end_of_left_segment.next.next = current;
    end_of_left_segment.next = previous;    
    return head;
  };
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)
  