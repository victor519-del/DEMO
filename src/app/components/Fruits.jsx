import Image from "next/image"
import {BsInstagram} from 'react-icons/Bs'
import {BiLike} from 'react-icons/Bi'
import style from './fruit.module.css'

export default function Fruits({list}) {
    const fruitList  = list.map(fruits => (
        <section key={fruits.id} className="bg-lime-400 space-x-8 mt-5 br-red '${style.section}'}"> 
          
          <Image src = {fruits.imagePath} alt = {fruits.name} width= {300} height = {250}/>
          <h2>{fruits.name}</h2>
          <h2>{fruits.botanicalName}</h2>
          <h2>{fruits.season}</h2>
          
   <div className ="flex gap-5 items-center"> 
          <BsInstagram/>
          <BiLike/>
          </div>
        </section>
    ))
  return (
    <div className="grid grid-cols-3">
        {fruitList}
    </div>
  )
}
