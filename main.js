const numbers = (first, last) => {
    var list = [];
    for (let i = first; i <= last; ++) {
        list.push(i);
    }
    return list;
}

const letters = (number) => {
    let set = numbers(1, number);
    let array = [];
    for (let i in set){
      if(i%2 && i%3 && i% 5==0) {
        i = "yu-gi-oh"
        array.push(i);
      }
      else if (i %2 && i%3==0) {
        i = "yu-gi"
        array.push(i);
      }
      else if(i%2 && i%5==0) {
        i = "yu-oh"
        array.push(i);
      }
      else if (i%3 && i%5==0) {
        i = "gi-oh"
        array.push(i);
      }
      else if (i%2==0) {
        i = "yu"
        array.push(i);
      }
      else if(i%3==0) {
        i = "gi"
        array.push(i);
      }
      else if(i%5==0) {
        i = "oh"
        array.push(i);
      }
      else  {
        i = i
        array.push(i);
    }
    }
    return array;
}
console.log(letters(100));