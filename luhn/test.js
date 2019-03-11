function range(arr) {
   var greatest = arr[0];
   var minimum = arr[0];

   for (i = 0; i < arr.length; i++) {
     if (minimum > arr[i]) {
       minimum = arr[i];
       console.log(minimum);
     }
   for (j = 0; j < arr.length; j++) {
     if (greatest < arr[j]) {
       greatest = arr[j];
       console.log(greatest);

     }
   }
   return greatest - minimum;
 }
}

 range([8,3,1,8,3]);