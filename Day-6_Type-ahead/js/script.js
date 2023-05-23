import endpoint from "../gb.json" assert { type: "json" };

console.log(endpoint);

const cities = [];
fetch(endpoint)
  .then(blod => blod.json())
  .then(data => cities.push(...data));
  
