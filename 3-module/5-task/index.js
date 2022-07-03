function getMinMax(str) {
  let result = str
  .split(" ")
  .map(item => +item)
  .filter(item => !isNaN(item));
  
  let minmax = {min: +`${Math.min(...result)}`,
  max: +`${Math.max(...result)}`}

  return minmax;
 
}
