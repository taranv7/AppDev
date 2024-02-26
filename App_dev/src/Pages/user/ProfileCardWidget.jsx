import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ProfileCover from '../../Images/bg1.jpg'
// import { reload } from '@firebase/auth';
const ProfileCardWidget =()=> {
    return (
        <div>
            {/* <h1>ProfileCardWidget</h1> */}
            <Card border="light" className="text-center p-0 mb-4" style={{display: 'flex'}}>
            <div style={{ backgroundImage: `url(${ProfileCover})` }}  className="profile-cover rounded-top" />
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/src/Images/bg3.jpg"
                    title="green iguana"
                />
                <div className='image' style={{height: "120px", width: '120px', backgroundImage: "url('/src/Images/bg1.jpg')", borderRadius: "50%", position: 'relative', left: '32%', bottom: '60px', zIndex: '5'}}/>
                <div style={{position: 'relative', bottom: '70px'}}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Taran
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Skcet
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='contained'>Update Profile Pic</Button>
                    <Button size="small" variant='contained'>Update Cover Pic</Button>
                </CardActions>
                </div>
                </Card>
            </Card>
        </div>
    )
}

export default ProfileCardWidget