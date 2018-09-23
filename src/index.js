/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   let count = 0;

   let check = [];

   preferences.unshift(-1);
   console.log(preferences);
   for (let i = 0; i < preferences.length; i++) {
      check[i] = 0;
   }

   let i = 0, first = 0, second = 0, third = 0;
   check[0] = 1;
   console.log(check);

   for (i = 1; i < preferences.length; i++) {
      if (check[i] === 0) {
         check[i] = 1;
         first = preferences[i];
         if (first != i && check[first] === 0) {
            second = preferences[first];
            if (second != first && second != i && check[second] === 0) {
               third = preferences[second];
               if (i === third) {
                  check[first] = 1;
                  check[second] = 1;
                  count++;
               }
            }
         }
      }
   }
   return count;
};
