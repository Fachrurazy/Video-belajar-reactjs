import { Suspense } from "react"

const suspensefallback = (props) => {
    const { children, fallback="Loading..." } = props
    return (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
    )
}

export default suspensefallback