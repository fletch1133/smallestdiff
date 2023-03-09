//function smallestDifference(list1, list2) {
//    list1.sort((a, b) => a - b);
//    list2.sort((a, b) => a - b);
//    let i = 0;
//    let j = 0;
//    let minDiff = Number.MAX_SAFE_INTEGER;
//    while (i < list1.length && j < list2.length) {
//      const diff = Math.abs(list1[i] - list2[j]);
//      if (diff < minDiff) {
//        minDiff = diff;
//      }
//      if (list1[i] < list2[j]) {
//        i++;
//      } else {
//        j++;
//      }
//    }
//    return minDiff;
//  }
//  console.log(smallestDifference())

let arr1 = [10,20,14,16,18]
let arr2 = [30,23,54,33,96]

const smallestDifference = (arrOne,ArrTwo) => {
    let smallest;

    for(let i = 0; i < arrOne.length; i++){
        for(let j = 0; j < ArrTwo.length; j++){
            //let difference = Math.abs(arrOne[i] - arrTwo[j])
            let difference;
            if(arrOne[i] > arrtwo[j]){
                difference = arrOne[i] - arrTwo[j]
            } else {
                difference = arrTwo[j] - arrOne[i]
            }
            if(smallest === undefined || difference < smallest)
            smallest = difference
        }
    }
    return smallest
}

console.log(smallestDifference(arr1,arr2))


///Demo exercise\\\
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null){
    this.head = head
    }
    size(){
        let count = 0
        let node = this.head

        while(node){
            count ++ 
            node = node.next
        }
        return count
    }
    loop(callBack){
        let node = this.head
        while(node){
            callBack(node)
            node = node.next
        }
    }
}

let myList = new LinkedList()

let one = new Node(1)
let two = new Node(2)
let three = new Node(3)
one.next = two
two.next = three
myList.head = one

let four = new Node(4)
two.next = four
four.next = three

//console.log(myList.head.next.data)
//console.log(myList.size())
myList.loop((node) => {
    node.data += 3
})
