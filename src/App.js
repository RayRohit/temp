import { Box,Grid, Paper, Tab, Tabs } from '@mui/material';
import React from 'react';
import TextArea from './Components/TextArea';
import './App.css'

function App() {

  return (
    <>
    <Box sx={{
      p:1
    }}>
      <Grid container rowSpacing={2} spacing={1} sx={{backgroundColor:'#F5F5F5'}}>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <TextArea />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Paper sx={{p:1,height:"100vh"}}>
          <Box sx={{justifyContent:"space-around"}}>
            <Tabs  aria-label=" tabs example" >
                <Tab label="AI Analysis" sx={{"&:focus":{
                  backgroundColor:"#F5F5F5"
                },"&:active":{
                  backgroundColor:"#F5F5F5"
                }
                
                }} />
              <Tab label="Panel Analysis" sx={{"&:focus":{
                  backgroundColor:"#F5F5F5"
                },"&:active":{
                  backgroundColor:"#F5F5F5"
                }
               }} />
            </Tabs>
          </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>

          <Paper sx={{p:2}}>hello</Paper>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default App;
