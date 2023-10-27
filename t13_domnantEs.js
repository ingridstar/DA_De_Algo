function domnantEs(arr) {
    const reslt = [];
    let k = 0;
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i] && -1000 <= arr[i] && arr[i] <= 1000) {
       reslt[k] = arr[i];
        k++;
        if (-1000 <= arr[arr.length - 1] && arr[arr.length - 1] <= 1000) {
      reslt[k] = arr[arr.length - 1];
    }
      }
    }
    
    return reslt;
  }
  console.log(domnantEs([5, 4, 3, 2, 1])); // [5, 4, 3, 2,1]
  console.log(domnantEs([1, 21, 4, 7, 5])); // [21,7,5]