import { CalendarMonth, FiberManualRecordSharp } from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography,LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function AiAnalysis() {
  const data = [
   {
      id:0,
      name:"Heading",
      color:'warning'
    }, 
    {
      id:1,
      name:"Tone",
      color:'success',
      value:1
    },
    {
      id:2,
      name:"Emotion",
      color:'primary',
      value:1
    },
    {
      id:3,
      name:"Plagiarism",
      color:'secondary',
      value:1
    },
    {
      id:4,
      name:"Corrections",
      color:'error',
      value:1
    },
  ]

  const styles = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'start',
    alignItems:'center',
    width:'100%'
  }

  return (
    <div>
        <Paper>
          <Typography variant='h6' sx={{p:1,textAlign:"center",color:"#FFD700"}}><CalendarMonth />&nbsp; Ai Analysis</Typography>
        </Paper>
        <Paper sx={{height:"75vh",mt:1}}>
          <List sx={{p:4,height:"70vh",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
            
            {/* <ListItem sx={{
              flexDirection:'column'
            }}>
            <Box sx={styles}>
              <ListItemIcon>
                <FiberManualRecordSharp sx={{color:"red",fontSize:"medium"}} />
              </ListItemIcon>
              <ListItemText sx={{fontWeight:"bolder"}}>
                <Typography variant='h5' sx={{fontWeight:"bold"}}>HeadLine </Typography>
              </ListItemText>
            </Box>
            <Box sx={styles}>
              <ListItemText sx={{pl:7}}>
              <Typography variant='h6' sx={{fontWeight:"bold",color:"orange"}}>Impact Score: </Typography>
              </ListItemText>
            </Box>
              </ListItem> */}

            {
              data.map(item => {
                let color = {color:item.color}
                return(
                  <div key={item.id}>
                    <ListItem  sx={{
                      flexDirection:'column'
                    }}>
                    <Box sx={styles}>
                      <ListItemIcon>
                        <FiberManualRecordSharp {...color} sx={{fontSize:"medium"}} />
                      </ListItemIcon>
                      <ListItemText sx={{fontWeight:"bolder"}}>
                        <Typography variant='h5' sx={{fontWeight:"bold"}}>{item.name}</Typography>
                      </ListItemText>
                    </Box>
                    <Box sx={styles}>
                      <ListItemText sx={{pl:7}}>
                      <Typography variant='h6'>{item.name === "Heading" ? <span style={{color:'orange', fontWeight:'bold'}}>Impact Scores: </span> : <span>0 Alert</span> } </Typography>
                      </ListItemText>
                    </Box>
                    <Box sx={styles}>
                      <ListItemText sx={{pl:7}}>
                      {item.name !== "Heading" && <LinearProgress variant='determinate' {...color} sx={{backgroundColor:'#F5F5F5',borderRadius:"20px",padding:"4px"}} value={item.value} /> }
                      </ListItemText>
                    </Box>
                      </ListItem>
                      <ListItem>
                    </ListItem>
                  </div>
                )
              })
            }
          </List>
        </Paper>
    </div>
  )
}
