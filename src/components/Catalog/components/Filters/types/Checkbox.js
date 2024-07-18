import Image from '../../Image';
import checkIcon from './Vector 1.svg'
import { useState } from 'react';




export function Check({title, variants}) {
  const [checked, setChecked] = useState()
  const handle = (value) =>  {
    console.log(value)
    setChecked(value)
  }

  return (
    <div className='flex flex-col gap-4'>
      <span className='font-bold uppercase text-sm'>{title}</span>
      {variants.map((variant) => (
        checked === variant ? <Checked value={variant} handle={handle}/> : <Idle value={variant} handle={handle}/> 
      ))}
    </div>
  );
}


function Checked({value, handle}) {
  return  (
    <div className="flex flex-row gap-4 align-middle">
      <div className='flex size-4 bg-app-blue justify-center self-center items-center bordered' onClick={(e) => {e.stopPropagation(); handle(value)}}>
        <Image icon={checkIcon} className='size-4 self-center'/>
      </div>
      <span>{value}</span>
    </div>
  )
}

function Idle({value, handle}) {
  return  (
    <div className="flex flex-row gap-4 align-middle" onClick={(e) => {e.stopPropagation(); handle(value)}}>
      <div className='size-4 self-center bordered'/>
      <span>{value}</span>
    </div>
  )
}