import React from 'react'

async function fetchContact() { 
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json();
  
  console.log(data)
  console.log(data.products);

    return data.products;
}

export default fetchContact;
