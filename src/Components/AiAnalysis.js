import { CalendarMonth, FiberManualRecordSharp} from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography,LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { AppContext } from '../GlobalState/GlobalState'

export default function AiAnalysis() {
  const app = useContext(AppContext)
  console.log(app)
  const data = [
    {
      id:0,
      name:"Headline",
      color:'warning',
      value:1,
      isTrue : false,
      backgroundColor:'rgba(255,138,101,0.4)'
    },
    {
      id:1,
      name:"Tone",
      color:'success',
      value:1,
      isTrue : false,
      backgroundColor:'rgba(43,187,173,0.2)'
    },
    {
      id:2,
      name:"Emotion",
      color:'primary',
      value:1,
      isTrue : false,
      backgroundColor: 'rgba(140, 158, 255,0.5)'
    },
    {
      id:3,
      name:"Plagiarism",
      color:'secondary',
      value:1,
      isTrue : false,
      backgroundColor:'rgba(230, 230, 250)'
    },
    {
      id:4,
      name:"Corrections",
      color:'error',
      value:1,
      isTrue : false,
      backgroundColor:'rgba(255,148,148,0.6)'
    },
  ]
  const styles = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'start',
    alignItems:'center',
    width:'100%'
  }
  const [highlight,setHighlight] = useState('')
  function handlePaper(item){  
    for(let dat of data){
      if(dat.name === item.name){
        console.log(dat)
        app[`set${item.name}`](true)
        setHighlight(item.name)
      }
      else{
        app[`set${dat.name}`](false)
      }
    }
  }
  return (
    <>
        <Paper elevation={0} sx={{p:1}}>
          <Typography variant='h6' sx={{textAlign:"center",color:"#FFD700",fontSize:'16px'}}><CalendarMonth />&ensp;AI ANALYSIS</Typography>
        </Paper>
        <Paper>
          <List sx={{p:4,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
            {
              data.map(item => {
                let color = {color:item.color} 
                let elevate = 0
                let backgroundcolor = null
                  if(highlight === item.name){
                    elevate = 1
                    backgroundcolor = item.backgroundColor
                  }
                return(
                  <Paper elevation={elevate} sx={{m:1, backgroundColor:backgroundcolor}}  onClick={() => handlePaper(item)}>
                    <ListItem sx={{
                      flexDirection:'column'
                    }}>
                    <Box sx={styles}>
                      <ListItemIcon>
                        <FiberManualRecordSharp {...color} sx={{fontSize:"medium"}} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant='h5' sx={{fontWeight:"bold"}}>{item.name}</Typography>
                      </ListItemText>
                    </Box>
                    <Box sx={styles}>
                      <ListItemText sx={{pl:7}}>
                      {
                          item.id === 0 ? <Typography variant='h6'>Impact Score: </Typography> : <Typography variant='h6'>0 Alerts </Typography>
                      }
                      </ListItemText>
                    </Box>
                    <Box sx={styles}>
                      <ListItemText sx={{pl:7}}>
                        {
                          item.id === 0 ? null : <LinearProgress variant='determinate' {...color} sx={{backgroundColor:'#F5F5F5',borderRadius:"20px",padding:"4px"}} value={item.value} />
                        }
                      </ListItemText>
                    </Box>
                      </ListItem>
                      <ListItem>
                    </ListItem>
                  </Paper>
                )
              })
            }
          </List>
        </Paper>
    </>
  )
}