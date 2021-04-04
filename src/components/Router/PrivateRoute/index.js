import { Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import "../../style.css"
import { ContextMain } from "../../common/Drawer/ContextMain"
import axios from "axios"
import { API } from '../../common/Drawer/constant';

import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from "@material-ui/core/CircularProgress";

const Privateroute = withRouter((props) => {
    const [userData, setUserData] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const [isReferValid, setReferValid] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [loader, setLoader] = React.useState(false);

    const mainApi = () => {
        setLoader(true)
        axios.get(`${API.main_url}?page=${page}`).then((response) => {
            if (response.data) {
                setUserData(response.data)
                setIsValid(true)
                setLoader(false)
                console.log("byr2", response.data)
            }
            else {
                setReferValid(true)
            }
        }).catch((error) => {
            console.log("error", error)
        });

    }

    const handleChange = (event, value) => {
        setPage(value);
        mainApi()
    };

    useEffect(() => {
        mainApi()

    }, [])

    if (true) {
        if (Object.keys(userData).length > 0) {
            return (
                <Route render={() =>
                    <div className="bg-grey full-len mt-3" >
                        <ContextMain.Provider value={{ userData: [userData, setUserData] }}>
                            <div className="max-width max-width-padd mt-4">
                                <Card className="custom-card card-dashboard">
                                    <CardContent >
                                        <div className="col-md-12 mt-3">
                                            {loader ? <>   <div className="Circular-Progress">
                                                <CircularProgress color="inherit" />
                                            </div></> : <>   <props.component />
                                                <Pagination count={4} className="margin-top" page={page} onChange={handleChange} /></>}

                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </ContextMain.Provider>
                    </ div>} />
            )
        }
        else {
            if (isReferValid) {
                return (
                    <Redirect to={{
                        pathname: `/`,
                    }} />
                )
            } else {
                return (
                    <div className="Circular-Progress">
                        <CircularProgress color="inherit" />
                    </div>
                )
            }
        }
    }
    else {
        return (
            <Redirect to={{
                pathname: `/`,
            }} />
        )
    }


})
export default Privateroute;
