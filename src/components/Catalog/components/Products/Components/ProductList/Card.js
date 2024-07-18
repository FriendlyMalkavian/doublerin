import React from "react"
import Image from '../../../Image'
import Button from '../../../Button'


export default function Card({id}) {
  const desc = "Дублерин клеевой для ткани Черный 150х100 см, 75 г/кв. м"
  const actualPrice = 500
  const discount = 399

  return  (
    <div className="flex flex-col"> 
      <Image icon={new URL(`./first.png`, import.meta.url).href} className="h-[300px] w-full"/>
      <div className="flex flex-col w-full mt-3">
        <p className="text-sm font-semibold mb-3">{desc}</p>
        <div className="flex flex-row gap-4 h-10">
          <PriceSection actualPrice={actualPrice} discount={discount}/>
          <Button id={`${id}`} text="в корзину" textClass='font-normal uppercase' className="flex-1 min-w-40"/>
        </div>
      </div>
    </div>
  )
}

function PriceSection({actualPrice, discount}) {
  return ( 
    <div className="flex flex-1 flex-tow justify-between">
        <span className="text-app-blue text-2xl font-bold flex items-center">
          {discount} ₽
        </span>
            
        <span className="text-gray-600 text-sm line-through flex items-center">
          {actualPrice} ₽
        </span>
      </div>
    )
}