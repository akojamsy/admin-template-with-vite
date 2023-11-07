import { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {
        const handleWidthResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWidthResize)

        handleWidthResize()

        return () => window.removeEventListener('resize', handleWidthResize)
    },[])
  
    return { width }
}

export default useWindowSize