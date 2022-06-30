function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function addTwoNumbers (l1,l2){

    let head = new ListNode(0);
    console.log("head :" + head.val);
    let node = head;
    console.log("node : "+ node.val);

    let carry = 0;

    while (l1 || l2){
        console.log("l1 :" + l1);
        console.log("l2 :" + l2);

        console.log("l1 :" + l1.val);
        console.log("l2 :" + l2.val);

        

        let l1Value = l1 ? l1.val : 0;
        console.log ("l1Value : " + l1Value );
        let l2Value = l2 ? l2.val : 0;
        console.log ("l1Value : " + l1Value );

        let sum = l1Value + l2Value +carry;
        console.log("Sum : "+sum);
        carry = 0;

        let newValue = sum;
        
        if(sum>9){
            newValue=sum %10;
            console.log("newValue if sum>9" + newValue);
            carry=1
        }

        node.next = new ListNode(newValue);
        node = node.next;
        console.log(node);

        if(l1){
            l1 = l1.next;
            console.log(l1);
        }

        if(l2){
            l2 = l2.next;
            console.log(l2);
        }

    }

    if(carry){
        node.next = new ListNode(carry)
    }

    return head.next;
}

//l1 = [2,4,3], l2 = [5,6,4]

addTwoNumbers([2,4,3], [5,6,4])