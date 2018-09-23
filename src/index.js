/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
function getLoveTrianglesCount(preferences = []) {
  let count = 0;

    preferences.unshift(-1);

  let index = [];

  for (let i = 0; i <= preferences.length; i++){
      index[i] = 0;
  }
    index[0] = 1;

    for (let i = 1; i < preferences.length && index[i] != 1; i++){
      let first = preferences[i];
      let second = (index[first] == 0 || first == preferences[first]) ? preferences[first] : -1;
      let third = (index[second] == 0 || secont == preferences[second])? preferences[second] : -1;

      index[i] = 1;

        if (first > 0 && second > 0 && third > 0){
          if (i == third){
            index[first] = index[second] = 1;
            count++;
          }
        }
    }
    return count;
};