import { FeaturedVideo } from "../../components/featured/Featured"
import { ClipoHeader } from "../../components/header/Header"
import RecommendedVideos from "../../components/Recommended/Recommended"
import { Toast } from "../../components/toastCategory/Toast"
export function HomePage() {
    return <>
        <ClipoHeader />
        <FeaturedVideo/>
        <RecommendedVideos/>
    </>


}