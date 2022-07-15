import { Box, Paper, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
// import nodata from '../nodata.webp'
// import Tone from './Tone';

function TabPanel(props){
  const {children,index,value} = props;
  return(
    <>
      {
        value === index && (
          <>
            {children}
          </>
        )
      }
    </>
  )
}
export default function Analysis() {
  const[value,setvalue] = useState(0)
  const handleChange = (e,newValue) =>{
    setvalue(newValue)
  }
  return (
    <div>
      <Paper>
          <Box sx={{width:"100%"}}>
            <Tabs value={value} TabIndicatorProps={{
              style:{
                display:"none",
                fontWeight:"bolder"
              }
            }} onChange={handleChange} aria-label=" tabs example">
                <Tab label="AI Analysis" value={0}
                sx={{fontWeight:"bolder",width:"50%","&:focus":{
                  backgroundColor:"#F5F5F5",
                  color:"#FFD700"
                },"&:active":{
                  backgroundColor:"#F5F5F5",
                  color:"#FFD700"
                }
                
                }} />
              <Tab label="Panel Analysis" value={1}
               sx={{fontWeight:"bolder",width:"50%","&:focus":{
                  backgroundColor:"#F5F5F5",
                  color:"#FFD700"
                },"&:active":{
                  backgroundColor:"#F5F5F5",
                  color:"#FFD700"
                }
               }} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box>
               {/* <Tone /> */}
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
               <Typography variant='h6'>Panel Analysis</Typography>
          </TabPanel>
          </Paper>
    </div>
  )
}
