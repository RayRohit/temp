import React from 'react'
import {Paper,Typography,Button,TextField,TextareaAutosize,Box} from '@mui/material'
import {BookmarksOutlined,FileDownloadOutlined,FormatBold,FormatItalic,FormatUnderlined,FormatStrikethrough,FormatAlignJustify, FormatAlignLeft} from '@mui/icons-material'

export default function TextArea() {
  return (
    <div>
        <Paper sx={{display:"flex"}}>
            <Typography variant='h6' sx={{color:"gray",p:1}}>1AVDcXSE</Typography>
            <Box sx={{marginLeft:"auto"}}>
              <Button sx={{color:"gray"}}>
                <BookmarksOutlined />
              </Button>
              <Button  sx={{color:"gray"}}>
                <FileDownloadOutlined sx={{fontSize:"30px"}}/>
              </Button>
            </Box>
          </Paper>
          <Paper sx={{mt:1,p:1,height:"70vh"}}>
          <TextField 
            variant='standard'
            placeholder='Write your Headline here'
            style={{width:"100%",padding:"10px"}}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder='Write or Paste Your Content Here'
            style={{ width: "100%",height:"90%",border:"none",resize:"none",padding:"10px","input & ::placeholder":{fontSize:"25px"} }}
          />
          </Paper>
          <Paper sx={{mt:1,display:"flex",flexDirection:"row",overflow:"auto"}}>
            <Box sx={{display:"flex",flexDirection:"row",overflow:"auto"}}>
              <Button sx={{color:"#000"}} > 
                <FormatBold  />
              </Button>
              <Button sx={{color:"#000"}}> 
                <FormatItalic />
              </Button>
              <Button sx={{color:"#000"}}> 
                <FormatUnderlined />
              </Button>
              <Button sx={{color:"#000"}}> 
                <FormatStrikethrough />
              </Button>
              <Button sx={{color:"#000"}}> 
                <Typography variant='h6' sx={{fontWeight:"bold"}}>H1</Typography>
              </Button>              
              <Button sx={{color:"#000"}}> 
                <Typography variant='h6' sx={{fontWeight:"bold"}}>H2</Typography>
              </Button>              
              <Button sx={{color:"#000"}}> 
                <FormatAlignJustify />
              </Button>              
              <Button sx={{color:"#000"}}> 
                <FormatAlignLeft />
              </Button>

            </Box>

          </Paper>
    </div>
  )
}
