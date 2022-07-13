import React from 'react'
import {Paper,Typography,Button,TextField,TextareaAutosize,Box} from '@mui/material'
import {BookmarksOutlined,FileDownloadOutlined} from '@mui/icons-material'

export default function TextArea() {
  return (
    <div>
        <Paper sx={{p:1,display:"flex"}}>
            <Typography variant='h5' sx={{color:"gray",p:1}}>1AVDcXSE</Typography>
            <Box sx={{marginLeft:"auto"}}>
              <Button sx={{color:"gray"}}>
                <BookmarksOutlined />
              </Button>
              <Button  sx={{color:"gray"}}>
                <FileDownloadOutlined sx={{fontSize:"30px"}}/>
              </Button>
            </Box>
          </Paper>
          <Paper sx={{height:"90vh",mt:1,p:1}}>
          <TextField 
            variant='standard'
            placeholder='Write your Headline here'
            style={{width:"100%",padding:"10px"}}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder='Write or Paste Your Content Here'
            style={{ width: "100%",height:"80vh",border:"none",resize:"none",padding:"10px","input & ::placeholder":{fontSize:"25px"} }}
          />
          </Paper>
    </div>
  )
}
