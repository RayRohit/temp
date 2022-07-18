import { Accordion, AccordionDetails, AccordionSummary, Box, Button, ListItem, ListItemIcon, ListItemText, ThemeProvider, Typography, useMediaQuery, useTheme } from '@mui/material'
import {ExpandMore,FiberManualRecord} from '@mui/icons-material'
import React, { useState } from 'react'
import { themes } from './theme';
export default function Correction() {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const accData = [
        {
            id:100,
            name:"pandemic",
            panel:"panel1",
            mean:"Pandemic"
        },
        {
            id:101,
            name:"jet",
            panel:"panel2",
            mean:"Jet"
        },
        {
            id:102,
            name:"you",
            panel:"panel3",
            mean:"You"
        },
        {
            id:103,
            name:"!",
            panel:"panel4",
            mean:"!"
        }
    ]
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down('xl'))
  return (
    <ThemeProvider theme={themes}>
        <Box sx={{p:3}}>
            <Typography variant='h4' sx={{fontWeight:"600"}} color="error">Correction</Typography>
                <Box sx={{px:3}}>
                    {
                        <>
                            {
                                accData.map(accItem => {
                            return(
                                <>
                                <div style={{
                                    marginTop:'30px',
                                }}>
                                    <Accordion  expanded={expanded === `${accItem.panel}`} key={accItem.id} onChange={handleChange(`${accItem.panel}`)}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        >
                                        {
                                         isSm ?
                                            <>
                                                <ListItem >
                                                    <ListItemIcon><FiberManualRecord sx={{color:"#CC0000"}}/></ListItemIcon>
                                                    <ListItemText>
                                                        <Typography  sx={{fontWeight:'bold'}}>
                                                            {accItem.name}
                                                        </Typography>
                                                    </ListItemText>
                                                </ListItem>
                                            </>:<>
                                            <Typography sx={{ width: '30%', flexShrink: 0 ,fontWeight:"bolder",}}>
                                                <ListItem >
                                                    <ListItemIcon><FiberManualRecord sx={{color:"#CC0000"}}/></ListItemIcon>
                                                    <ListItemText>
                                                        <Typography sx={{fontWeight:'bold',fontSize:"20px"}} >{accItem.name}</Typography>
                                                    </ListItemText>
                                                </ListItem>
                                            </Typography>
                                            <Typography sx={{ marginLeft:"auto",fontWeight:"bold",padding:"12px 20px 0 0 " }}>check your spelling / grammar</Typography>
                                            </>
                                        }
                                    </AccordionSummary>
                                        <AccordionDetails>
                                        <Box sx={{pl:3}}>
                                            <Typography variant='h6' sx={{fontWeight:"bold"}}>Did you Mean</Typography>
                                            <Button sx={{borderRadius:"20px",color:"gray",border:'1px solid gray',px:2,mt:1,"&:hover":{color:"gray",border:'1px solid gray'}}} variant='outlined'>{accItem.mean}</Button>
                                        </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                </>
                            )
                        })
                            }
                        </>
                    }
                </Box>
        </Box>
    </ThemeProvider>
  )
}