class Sorter {
  constructor() {
    this.arr = [];
        // your implementation
  }

  add(element) {
    this.arr.push(element);
    // your implementation
  }

  at(index) {
    return this.arr[index];
    // your implementation
  }

  get length() {
    return this.arr.length;
    // your implementation
  }

  toArray() {
    return this.arr;
    
    // your implementation
  }
    
  sort(indices) {
      var defaultcomp = function (a, b) {
      return a-b;
    };
      var comp = defaultcomp;
      if(this.comparator){
      comp = this.comparator;
    }
    var tempArr = [];
    for(var i = 0; i < indices.length; i ++)
    {
    tempArr.push(this.arr[indices[i]]);
    }
    
    tempArr.sort(comp);
    
    for(var i = 0; i < indices.length; i ++)
    {
    this.arr[indices[i]] = tempArr[i];
    }
    
    
    
         // your implementation
  }


  setComparator(compareFunction) {
    this.comparator = compareFunction;
    // your implementation
  }
}

module.exports = Sorter;