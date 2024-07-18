import React from "react"
import Button from "../../../Button"

export function CategoryItem({ item, selected, select }) {
  let classes = 'category'
  if (!selected) classes += " unselected"
  console.log(item)

  return (
    <Button text={item.name} className={classes} clicked={select} id={item.id} />
  )
}