import React from 'react'
import ProductCard from '../ProductCard'
import Apple from '../../Assets/Apple.jpeg';
import Cherry from '../../Assets/Cherry.jpeg';
import Mango from '../../Assets/Mango.jpeg';
import Orange from '../../Assets/Orange.jpeg';
import Pappaya from '../../Assets/Pappaya.jpeg';
import Watermelon from '../../Assets/Watermelon.jpeg';

function ShoppingCard() {
  const datas = [
    {
      id: 1,
      name: "Apple",
      pricePerKG: 250,
      img: Apple,
      desc: "Apple is good for health. everybody likes it",
      isStock: true
    },
    {
      id: 2,
      name: "Cherry",
      pricePerKG: 500,
      img: Cherry,
      desc: "Cherry is a costly fruit its a red color fruit",
      isStock: false
    },
    {
      id: 3,
      name: "Mango",
      pricePerKG: 150,
      img: Mango,
      desc: "Mango is a Seasonal fruit its avail more different kinds of mangoes",
      isStock: true
    },
    {
      id: 4,
      name: "Orange",
      pricePerKG: 200,
      img: Orange,
      desc: "Orange is seasonal fruit its give vitamin c",
      isStock: true
    },
    {
      id: 5,
      name: "Pappaya",
      pricePerKG: 100,
      img: Pappaya,
      desc: "Pappaya its a Warm fruit but good for eyes",
      isStock: false
    },
    {
      id: 6,
      name: "Watermelon",
      pricePerKG: 50,
      img: Watermelon,
      desc: "Watermelon summer fruit its a cool fruit",
      isStock: true
    },
  ];
  return (
    <div className="container-fluid overalldiv">
      <div className="row">
        <div className="col-10">left
          <div className="row d-flex">
           {datas.map((fruit)=>{
            return <ProductCard totalFruit={fruit} />
           })}
          </div>
        </div>
        <div className="col-2">right</div>
      </div>
    </div>
  )
}

export default ShoppingCard
