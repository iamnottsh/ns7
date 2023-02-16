import {useEffect, useState} from 'react'
import ns4 from "./ns4.js";
import {Box, Container, Grid, IconButton, LinearProgress, Link, TextField, Typography} from "@mui/material";
import {Clear, ContentCopy, ContentPaste} from "@mui/icons-material";

function Site() {
    const [module, setModule] = useState()
    useEffect(() => {
        ns4().then(setModule)
    }, [])

    const [left, setLeft] = useState('')
    const [right, setRight] = useState('')

    return (
        <Container component="main" sx={{mt: 2, mb: 2}} maxWidth="xl">
            <Box sx={{display: 'flex', alignItems: 'center', mb: 6}}>
                <Typography variant="h4" sx={{flexGrow: 1}}>喵喵隐者4</Typography>
                <Link href="https://gxlt.lanzouf.com/il0gr0nlq4bg" target="_blank" rel="noopener">安卓版</Link>
            </Box>
            {module ?
                <Grid container columns={{xs: 6, md: 12}} spacing={3}>
                    <Grid item xs={6}>
                        <Box sx={{position: 'relative'}}>
                            <TextField
                                label="原文"
                                fullWidth
                                multiline
                                rows={8}
                                value={left}
                                onChange={event => {
                                    const {value} = event.target
                                    setLeft(value)
                                    setRight(value ? module?.encode(value) : '')
                                }}
                            />
                            <Box sx={{position: 'absolute', right: 8, bottom: 8}}>
                                {navigator && navigator.clipboard && navigator.clipboard.writeText &&
                                    <IconButton size="large" onClick={() => {
                                        navigator.clipboard.writeText(left).then()
                                    }}>
                                        <ContentCopy/>
                                    </IconButton>
                                }
                                {navigator && navigator.clipboard && navigator.clipboard.readText &&
                                    <IconButton size="large" onClick={() => {
                                        navigator.clipboard.readText().then(setLeft)
                                    }}>
                                        <ContentPaste/>
                                    </IconButton>
                                }
                                <IconButton size="large" onClick={() => {
                                    setLeft('')
                                    setRight('')
                                }}>
                                    <Clear/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{position: 'relative'}}>
                            <TextField
                                label="密文"
                                fullWidth
                                multiline
                                rows={8}
                                value={right}
                                onChange={event => {
                                    const {value} = event.target
                                    setRight(value)
                                    setLeft(value ? module?.decode(value) : '')
                                }}
                            />
                            <Box sx={{position: 'absolute', right: 8, bottom: 8}}>
                                {navigator && navigator.clipboard && navigator.clipboard.writeText &&
                                    <IconButton size="large" onClick={() => {
                                        navigator.clipboard.writeText(right).then()
                                    }}>
                                        <ContentCopy/>
                                    </IconButton>
                                }
                                {navigator && navigator.clipboard && navigator.clipboard.readText &&
                                    <IconButton size="large" onClick={() => {
                                        navigator.clipboard.readText().then(setRight)
                                    }}>
                                        <ContentPaste/>
                                    </IconButton>
                                }
                                <IconButton size="large" onClick={() => {
                                    setRight('')
                                    setLeft('')
                                }}>
                                    <Clear/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid> :
                <LinearProgress/>
            }
        </Container>
    )
}

export default Site
