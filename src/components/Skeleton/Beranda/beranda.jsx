import Skeleton ,{SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const berandaskeleton = (props) => {
    const {children} = props
    return(
        <SkeletonTheme color="#313131" highlightColor="#525252">
            <nav className="flex items-center justify-between px-6 py-2 bg-white shadow-md lg:px-16 lg:py-0">
                <Skeleton width={100} height={25} className="mb-2"/>
                <Skeleton circle width={40} height={40} className="mb-2"/>
            </nav>
            <div className="min-h-screen px-6 py-16 m-auto xl:px-32 bg-body">
            <div className="flex m-auto">
                <Skeleton height={300} containerClassName="flex-1"/>
            </div>
            <div className="flex gap-5 mt-6">
                <Skeleton width={50}/>
                <Skeleton width={50}/>
                <Skeleton width={50}/>
                <Skeleton width={50}/>
                <Skeleton width={50}/>
            </div>
            <div className="container grid grid-cols-1 gap-5 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {children}
            </div>
            <div className="flex m-auto mt-5">
                <Skeleton height={300} containerClassName="flex-1"/>
            </div>
        </div>
        <footer className="bg-white">
            <div className="p-4 py-6 mx-5 lg:py-10">
                <Skeleton height={100}/>
                <Skeleton count={2} height={20} className="mt-4"/>
            </div>
        </footer>
        </SkeletonTheme>
    )
}

export default berandaskeleton