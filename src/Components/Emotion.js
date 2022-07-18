import { Accordion, AccordionDetails, AccordionSummary, Box, Button, LinearProgress, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Typography, useMediaQuery, useTheme } from '@mui/material'
import {ExpandMore,FiberManualRecord} from '@mui/icons-material'
import React, { useState } from 'react'
import { themes } from './theme';
export default function Emotion() {
    const [expanded, setExpanded] = useState(false);
    const [active,setActive] = useState(['Joy',{color:'warning'}])
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const button = [
        {
            id:0,
            color:"warning",
            name:"Joy"
        },
        {
            id:1,
            color:"error",
            name:"Anger"
        },
        {
            id:2,
            color:'success',
            name:'Fear'
        },
        {
            id:3,
            color:'primary',
            name:'Sadness'
        },
        {
            id:4,
            color:'info',
            name:'Surprise'
        }
    ]
    const [progressData] = useState([
        {
            id:10,
            color:"warning.main",
            name:"Joy",
            value:48,
            mcolor:'warning'
        },
        {
            id:11,
            color:"error.main",
            name:"Anger",
            value:10,
            mcolor:'error'
        },
        {
            id:12,
            color:"success.main",
            name:"Fear",
            value:27,
            mcolor:'success'
        },
        {
            id:13,
            color:"primary.main",
            name:"Sadness",
            value:27,
            mcolor:'primary'
        },
        {
            id:14,
            color:"info.main",
            name:"Surprise",
            value:27,
            mcolor:'info'
        }
    ])
    const accData = [
        {
            id:100,
            name:"breathtaking",
            panel:"panel1",
            color:'warning'
        },
        {
            id:101,
            name:"exposure",
            panel:"panel2",
            color:'error'
        },
        {
            id:102,
            name:"attractive",
            panel:"panel3",
            color:'success'
        },
        {
            id:103,
            name:"luxury",
            panel:"panel4",
            color:'primary'
        }
    ]
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <ThemeProvider theme={themes}>
        <Box sx={{p:3}}>
            <Typography variant='h4' sx={{color:"#1b5e20",fontWeight:"600"}}>Emotion</Typography>
                {
                    button.map((item)=>{
                        const variant = {variant : null,sx:{}}
                            if(isSm) {
                                if(active[0] ===item.name){
                                    let style = {fontWeight:"bolder",mx:1,my:2,borderRadius:"20px",border:"none",boxShadow:"1",fontSize:"12px","&:hover":{
                                        border:"none"}}                            
                                        variant['variant'] ='contained'
                                        variant['sx'] = style
                                }else{
                                    let style = {fontWeight:"bolder",mx:1,my:2,borderRadius:"20px",border:"none",boxShadow:"1",fontSize:"12px","&:hover":{
                                        border:"none"}}                            
                                        variant['variant'] ='outlined'
                                        variant['sx'] = style
                                }
                            }else{  
                                if(active[0] ===item.name){
                                    console.log("active:",active[0])
                                    console.log("item:",item.name)
                                    let style = {fontWeight:"bolder",mx:1,my:2,borderRadius:"20px",border:"none",boxShadow:"1",fontSize:"12px","&:hover":{
                                        border:"none"}}                            
                                        variant['variant'] ='contained'
                                        variant['sx'] = style
                                }else{
                                    let style = {fontWeight:"bolder",mx:1,my:2,borderRadius:"20px",border:"none",boxShadow:"1",fontSize:"12px","&:hover":{
                                        border:"none"}}                            
                                        variant['variant'] ='outlined'
                                        variant['sx'] = style
                                }
                            }
                            const color = {color:item.color}
                        return(
                            <>
                               <Button key={item.id} {...variant} {...color} size="large" onClick={() => setActive([item.name,{color:item.color}])} >{item.name}</Button>
                            </>
                        )
                    })
                }
                <List>
                    {
                        progressData.map((pro)=>{
                            const color = {color:pro.mcolor}
                            return(
                                <>
                                {
                                    active[0] === pro.name ?
                                    <>
                                        <ListItem sx={{px:5,py:3}}>
                                            <ListItemText key={pro.id}>
                                                <Typography variant='h6' sx={{fontWeight:"bold",color:`${pro.color}`}}>{pro.name}<span style={{float:"right",color:`${pro.color}`}}>{pro.value}%</span></Typography>
                                                <LinearProgress variant='determinate' {...color} sx={{padding:"5px",borderRadius:"10px"}} value={pro.value}/>
                                            </ListItemText>
                                        </ListItem>
                                    </>
                                    :
                                    <></>
                                }
                                </>
                            )
                        })
                    }
                </List>
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
                                                    <ListItemIcon><FiberManualRecord {...active[1]} /></ListItemIcon>
                                                    <ListItemText>
                                                        <Typography  sx={{fontWeight:'bold'}}>
                                                            {accItem.name}
                                                        </Typography>
                                                    </ListItemText>
                                                </ListItem>
                                            </>:<>
                                            <Typography sx={{ width: '30%', flexShrink: 0 ,fontWeight:"bolder",}}>
                                                <ListItem >
                                                    <ListItemIcon><FiberManualRecord {...active[1]} /></ListItemIcon>
                                                    <ListItemText>
                                                        <Typography sx={{fontWeight:'bold',fontSize:"20px"}} >{accItem.name}</Typography>
                                                    </ListItemText>
                                                </ListItem>
                                            </Typography>
                                            <Typography sx={{ marginLeft:"auto",fontWeight:"bold",fontSize:'12px',padding:"20px 20px 0 0 " }}>See more details</Typography>
                                            </>
                                        }
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography sx={{pl:3}}>
                                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                            Aliquam eget maximus est, id dignissim quam.
                                        </Typography>
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