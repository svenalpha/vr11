import { add } from './add'


//const urlx = 'http://localhost:5173/testy'; 
export function multiply(a, b) {
  return a * b
}

export async function doFetch() {
  var d =10;
  //console.log("urlx = ",urlx);
  //const response = await fetch(urlx);
  //const json = await response.json();
  //console.log("in getAllWorkouts, response = ",response);
  return d;
}

export function multiplyAndAdd(a, b, c) {
  doFetch();

  return add(multiply(a, b), c)
}
