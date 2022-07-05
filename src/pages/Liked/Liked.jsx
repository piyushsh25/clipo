import { ClipoHeader } from "../../components/header/Header"
import { LikedArray } from "../../components/Liked/LikedArray"
import { LikedHeader } from "../../components/Liked/LikedHeader"

export const Liked = () => {
    return <>
        <ClipoHeader />
        <LikedHeader />
        <LikedArray />
    </>
}