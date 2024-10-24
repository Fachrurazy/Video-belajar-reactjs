import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const loginskeleton = () => {
    return (
        <SkeletonTheme color="#313131" highlightColor="#525252">
            <nav className="flex flex-wrap items-center px-6 py-2 bg-white shadow-md lg:px-16 lg:py-0">
                <Skeleton width={100} height={25} className="mb-2"/>
            </nav>
        <div className="flex items-center justify-center min-h-screen bg-body">
        <div className="mx-8 my-16 bg-white border rounded w-590 max-md:w-96">
        <div className="flex flex-col items-center justify-center px-6 text-center pt-9 mb-9">
        <div className="font-poppins font-semibold text-3xl text-Text-(Dark)/Primary mb-3">
        <Skeleton width={200} height={15}/>
        </div>
        <div className="font-dm-sans text-base text-Text-(Dark)/Secondary">
        <Skeleton width={300} height={15}/>
        </div>
        </div>
        <div className="mb-4 px-9">
        <Skeleton width={50} height={10} />
        <Skeleton className="w-full" />
        <Skeleton width={50} height={10} />
        <Skeleton className="w-full" />
        <Skeleton count={3} className="w-full"/>
        </div>
        </div>
        </div>
        </SkeletonTheme>
    )
}

export default loginskeleton