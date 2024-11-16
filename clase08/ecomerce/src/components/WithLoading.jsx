import { useEffect, useState } from "react"

const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        setTimeout(()=> setLoading(false), 2000)
    },[])
    if(loading) return <h1>Loading...</h1>
        return <WrappedComponent {...props} />
    
  }
}

export default withLoading
