import React, { useContext } from 'react';
import GlobalDataContext from '../../apiCalls/GlobalDataContext';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import Countup from 'react-countup';

import './TillDate.css'

export const TillDate = () => {

    const context = useContext(GlobalDataContext);

    return (
        <div className="container">
            <h3>Summary</h3>
            <Grid container spacing={3} justify="center">

                <Grid item xs={8} md={3} component={Card} className="card infected">    
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {parseInt(context.globalData.TotalConfirmed)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(context.globalData.Dated).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total Infections due to COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={8} md={3} component={Card} className="card recovered"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {parseInt(context.globalData.TotalRecovered)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(context.globalData.Dated).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total Recovered from COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={8} md={3} component={Card} className="card deaths"> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <Countup start = {0} end = {parseInt(context.globalData.TotalDeaths)} duration = {.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(context.globalData.Dated).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total Deaths due to COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>

      </Grid>
    </div>
    )}