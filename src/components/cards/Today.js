import React, { useContext } from 'react';
import GlobalDataContext from '../../apiCalls/GlobalDataContext';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import Countup from 'react-countup';

import './TillDate.css'

export const Today = () => {

    const context = useContext(GlobalDataContext);

    return (
        <div className="container">
            <h3>Today</h3>
            <Grid container spacing={3} justify="center">

                <Grid item xs={8} md={3} component={Card} className="card infected">    
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">   
                            <Countup    start = {0} 
                                        end = {parseInt(context.globalData.NewConfirmed)} 
                                        duration = {.5} 
                                        separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {/* {new Date(lastUpdate).toDateString()} */}
                        </Typography>
                        <Typography variant="body2">
                            New Infections reported today.
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={8} md={3} component={Card} className="card recovered"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {parseInt(context.globalData.NewRecovered)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {/* {new Date(lastUpdate).toDateString()} */}
                        </Typography>
                        <Typography variant="body2">
                            New recovered repoted today.
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={8} md={3} component={Card} className="card deaths"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {parseInt(context.globalData.NewDeaths)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {/* {new Date(lastUpdate).toDateString()} */}
                        </Typography>
                        <Typography variant="body2">
                            New deaths reported today.
                        </Typography>
                    </CardContent>
                </Grid>

      </Grid>
    </div>
    )}