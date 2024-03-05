import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CallIcon from '@mui/icons-material/Call';
// import Sales from './Sales';
// import Piechart from './Piechart';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';

const AdminDashboard = () => {
   

    return (
        <div>
            <div>
            {/* <h1 >Dashboard</h1> */}
            <Grid className="grid-container" container rowSpacing={1} columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
                <Grid className='grid1' item xs={3} style={{minWidth: '400px', marginRight: '0px'}}>
                    {/* <img style={{height: '100%', width: '100%'}} src="/src/assets/Images/home1resize.png" alt="Description of the image" />
                        <div className='paper' style={{backgroundColor: 'lightblue', padding: '5px', borderRadius: '5px'}}>
                            <h1>Search Simply</h1>
                            <h3>Search through 100s of BoatHouse in just a few seconds.</h3>
                        </div> */}
                        {/* <Paper elevation={3}  style={{backgroundColor: 'black'}}/> */}
                        <div style={{height: "300px", width: '300px', left: '10px', bottom: '100px', zIndex: '1'}}>
                            <div>

                            <Card sx={{ maxWidth: "100%", backgroundColor: 'lightpink'}}>
                                <CardActionArea>
                                    
                                <CardContent>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <EventNoteIcon sx={{fontSize: '60px'}}/>
                                    </div>
                                <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                                        Courses Available
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" style={{paddingTop: '20px', textAlign: 'center'}}>
                                        25
                                    </Typography>
                                    <Typography  variant="body2" color="text.secondary" style={{textAlign: 'center', marginTop: '5%'}}>
                                        Talk To Customer Service
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </div>
                        <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '250px', left: '300px', zIndex: 1}}>
    
                        </div>
                        <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '300px', left: '250px'}}>
    
                        </div>
                </div>
                </Grid>
                <Grid className='grid1' item xs={3} style={{minWidth: '400px', marginRight: '0px'}}>
                <div style={{height: "300px", width: '300px', left: '10px', bottom: '100px', zIndex: '1'}}>
                    <div>

                            <Card sx={{ maxWidth: "100%",backgroundColor: 'lightpink'}}>
                                <CardActionArea>
                                    
                                <CardContent>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <TrendingUpIcon sx={{fontSize: '60px'}}/>
                                    </div>
                                <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                                        Slots Booked
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" style={{paddingTop: '20px', textAlign: 'center'}}>
                                        120
                                    </Typography>
                                    <Typography  variant="body2" color="text.secondary" style={{textAlign: 'center', marginTop: '5%'}}>
                                        Talk To Customer Service
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                    </div>
                    <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '250px', left: '300px', zIndex: 1}}>
    
                        </div>
                        <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '300px', left: '250px'}}>
    
                        </div>
                </div>
                </Grid>
                <Grid className='grid1' item xs={3} style={{minWidth: '400px', marginRight: '0px'}}>
                <div style={{height: "300px", width: '300px', left: '10px', bottom: '100px', zIndex: '1'}}>
                    <div>

                            <Card sx={{ maxWidth: "100%",backgroundColor: 'lightpink'}}>
                                <CardActionArea>
                                    
                                <CardContent>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <PersonIcon sx={{fontSize: '60px'}}/>
                                    </div>
                                <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                                        Users Registered
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" style={{paddingTop: '20px', textAlign: 'center'}}>
                                        300
                                    </Typography>
                                    <Typography  variant="body2" color="text.secondary" style={{textAlign: 'center', marginTop: '5%'}}>
                                        Talk To Customer Service
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                    </div>
                    <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '250px', left: '300px', zIndex: 1}}>
    
                        </div>
                        <div style={{backgroundColor : 'rgba(255, 255, 255, 0.5)',position: 'relative',height: '150px', width: '150px', borderRadius: '100px', bottom: '300px', left: '250px'}}>
    
                        </div>
                </div>
                </Grid>
            </Grid>
                {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px'}}> */}
                    
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>

            <Grid container spacing={2} style={{minWidth: '600px'}}>
                <Grid item xs={5} sm={7} style={{minWidth: '600px'}}>
                   
                    <div style={{ overflowX: 'auto', width: '100%' }}>
                        
                    </div>
                </Grid>
                <Grid item xs={7} sm={5} style={{minWidth: '600px'}}>
                    
                    <div style={{ overflowx: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '0px' }}>
                        
                    </div>
                </Grid>
            </Grid>
            </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default AdminDashboard