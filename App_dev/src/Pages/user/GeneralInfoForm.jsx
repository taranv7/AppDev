import React from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const GeneralInfoForm=()=> {
    return (
        <div style={{ marginLeft: '5%', marginRight: '5%'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
            <h1>General Info</h1>
            <form>
            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>First Name</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="Taran"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Last Name</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="V"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Birthday</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="15/11/2003"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Gender</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="Male"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="taranvadivelan777@gmail.com"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="7603860905"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <h1>Address</h1>

            <Grid container spacing={2} direction="row">
                <Grid item xs={10} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Address</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="2/74,Annur"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Resident Type</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="Rent"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>City</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="Coimbatore"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Pin Code</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="text"
                                value="641019"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="number"
                                value="7603860905"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div>
            <   Button variant="contained" type="submit">Edit</Button>
            </div>
        </form>
            </Card>
        </div>
    )
}

export default GeneralInfoForm