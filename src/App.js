import { Box,Grid,} from '@mui/material';
import React from 'react';
import TextArea from './Components/TextArea';
import Analysis from './Components/Analysis';
import AiAnalysis from './Components/AiAnalysis';

function App() {

  return (
    <>
    <Box sx={{
      p:1,backgroundColor:'#F5F5F5'
    }}>
      <Grid container rowSpacing={2} spacing={1}>
        <Grid item xs={12} sm={12} md={4} lg={5}>
          <TextArea />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Analysis />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <AiAnalysis />
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default App;
