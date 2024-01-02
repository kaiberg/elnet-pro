import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
import {getParks} from "@/UI/Components/Parks";
import ParksList from "@/UI/Components/ParksList";

export default async function Main() {

  return (
            <ParksList loadingCards={12}/>
  )
}