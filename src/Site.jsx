import {useEffect, useState} from 'react'
import ns4 from "./ns4.js";
import {Box, Container, Link, Typography} from "@mui/material";

function Site() {
    const [module, setModule] = useState()
    useEffect(() => {
        ns4().then(setModule)
    }, [])

    return (
        <Container component="main" sx={{mt: 2, mb: 2}}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography variant="h3" sx={{flexGrow: 1}}>喵喵隐者4</Typography>
                <Link href="https://gxlt.lanzouf.com/il0gr0nlq4bg" target="_blank" rel="noopener">安卓版</Link>
            </Box>
            <p>
                {module?.encode('23')}
            </p>
        </Container>
    )
}

export default Site
