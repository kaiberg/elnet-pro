import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
import ParksList from "@/UI/Components/ParksList";
import {downsample} from "@/Helpers/Processing/downsample";

export default async function Main() {
  return (
            <ParksList loadingCards={12}/>
  )
}