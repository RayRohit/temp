import { Close, Done, InfoOutlined } from '@mui/icons-material'
import { ListItem, ListItemIcon, ListItemText, Paper, Typography,LinearProgress, List, Link } from '@mui/material'
import { Box } from '@mui/system'
export function Headline(){
    const styles = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'start',
        alignItems:'center',
        width:'100%'
      }
      const review = {
        length:{
          id:1,
          name : 'Length is between 5 and 15 words',
        },
        stat : {
          name : 'Statistics and Numbers',
          error:false,
        },
        active :{
          name : 'Active Voice',
          error:false,
        },
        punch :{
          name : 'Punctuations',
          error:false,
        },
        power : {
          name : 'Power Word (Eg : Awesome,Supercharge)',
          error:false,
        }
      }      
    return(
        <>
         <Paper elevation={0} sx={{p:4}}>
          <ListItem  sx={{ flexDirection:'column'}}>
            <Box sx={styles}>
              <ListItemText>
                <Typography variant='h5' sx={{fontWeight:"bold",color:'orange'}}>Headline</Typography>
              </ListItemText>
            </Box>
            <Box sx={styles}>
              <ListItemText>
                <Typography variant='h6' sx={{fontSize:'15px',fontWeight:'bold',color:'graytext'}} >Sentence Length</Typography>
              </ListItemText>
              <ListItemText>
                <Typography variant='h6' sx={{color:'green',fontSize:'14px',fontWeight:'bold',textAlign:'right'}} >Good</Typography>
              </ListItemText>
            </Box>
            <Box sx={styles}>
              <ListItemText>
                <LinearProgress variant='determinate' color='error' sx={{backgroundColor:'#F5F5F5',borderRadius:"20px",padding:"4px"}} value={10} />
              </ListItemText>&nbsp;
              <ListItemText>
                <LinearProgress variant='determinate' color='warning' sx={{backgroundColor:'#f5f5f5',borderRadius:"20px",padding:"4px"}} value={0} />
              </ListItemText>&nbsp;
              <ListItemText>
                <LinearProgress variant='determinate' color='success' sx={{backgroundColor:'#F5F5F5',borderRadius:"20px",padding:"4px"}} value={0} />
              </ListItemText>
            </Box>
            <Box sx={styles}>
              <ListItemText>
                <Typography variant='h5' sx={{fontSize:'15px',fontWeight:"bold",color:'Graytext'}}>new</Typography>
              </ListItemText>
            </Box>
          </ListItem>
         </Paper>
         <Paper elevation={1} sx={{m:2,backgroundColor:'#f5f5f5',p:2}}>
           <ListItem  sx={{ flexDirection:'column'}}>
              <Box sx={styles}>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <ListItemText>
                    <Typography variant='h6' sx={{fontSize:'18px',fontWeight:"bold",color:'orange'}}>Impact Score : 78</Typography>
                  </ListItemText>&ensp;
                  <ListItemIcon>
                    <InfoOutlined sx={{fontSize:"medium"}} />
                  </ListItemIcon>
                </Box>
              </Box>
              <Box sx={styles}>
                <ListItemText>
                  <LinearProgress variant='determinate' color='warning' sx={{backgroundColor:'#A9A9A9',borderRadius:"20px",padding:"4px"}} value={50} />
                </ListItemText>
              </Box>
              <Box sx={{width:'100%'}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#f5f5f5'}}>
                  {
                    Object.keys(review).map((key) =>{
                      return(
                        <>
                          <ListItem key={key} sx={{p:0}}>
                            {
                              review[`${key}`].error ?
                                <>
                                  <Close sx={{fontSize:'15px',color:'red'}} />&ensp;
                                </>
                                :
                                <>
                                  <Done sx={{fontSize:'15px',color:'green'}} />&ensp;
                                </>
                            }
                            <ListItemText>{review[`${key}`].error ? <Typography variant='h5' sx={{fontWeight:"bold",fontSize:'14px', color:'lightgrey'}}>{review[`${key}`].name}</Typography> :<Typography variant='h5' sx={{fontWeight:"bold",fontSize:'14px  '}}>{review[`${key}`].name}</Typography>}</ListItemText>
                          </ListItem>
                        </>
                      )
                    })
                  }
                </List>
                <Paper sx={{p:2,backgroundColor:'#eceff1'}}>
                  <Typography sx={{fontSize:'14px', fontWeight:'bold'}} >Power Words from your content:</Typography>
                  <Link href='#' sx={{fontSize:'14px', fontWeight:'bold', fontStyle:'italic'}}  >Private</Link>
                </Paper>
                <ListItemText>
                  <Typography variant='h6' sx={{p:2,fontWeight:"bold",fontSize:'12px',color:'lightgrey'}}>Try using more Power Words to boost your Impact Sooner.</Typography>
                </ListItemText>
                </Box>
           </ListItem>
         </Paper>
        </>
    )
}