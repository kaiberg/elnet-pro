import ParksList from "@/UI/Components/ParksList";
import React from "react";

export default async function Main() {

    return (
        <ParksList type={'latest'} title={'Latest'} loadingCards={5} />
    )
}