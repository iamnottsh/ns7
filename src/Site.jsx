import {useEffect, useState} from 'react'
import ns4 from "./ns4.js";

function Site() {
    const [module, setModule] = useState()
    useEffect(() => {
        ns4().then(setModule)
    }, [])

    return (
        <p>
            {module?.encode('23')}
        </p>
    )
}

export default Site
