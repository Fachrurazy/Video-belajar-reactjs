import Skeleton ,{SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const cardskeleton = () => {
    return (
        <SkeletonTheme>
            <div className="p-5 bg-white border rounded-lg">
        <div className="container">
            <div className="max-sm:flex">
                <Skeleton height={100}/>
                <div className="max-sm:flex-col max-sm:ml-2">
                    <div className="lg:mt-2">
                        <Skeleton width={200} height={20}/>
                        </div>
                    <div className="max-sm:hidden">
                        <Skeleton width={200} height={20}/>
                        </div>
                    <div className="relative mt-2 ">
                        <Skeleton circle width={50} height={50} className="mr-2"/>
                        <div className="absolute left-14 bottom-1">
                        <Skeleton width={100} height={20} count={2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative flex justify-between mt-3">
            <Skeleton width={50} height={10}/>
            <div className="flex">
               <Skeleton width={50} height={10}/>
            </div>
        </div>
        </div>
        </SkeletonTheme>
    )
}

export default cardskeleton