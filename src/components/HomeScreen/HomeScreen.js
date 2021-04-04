import { Card, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import CustomTable from '../common/Drawer/customTable/customTable'
import { ContextMain } from "../common/Drawer/ContextMain"
import { createTable } from "../common/Drawer/Helperfunction"
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';


class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            value: 1,
        }
    }

    componentDidMount = () => {
        console.log("context", this.context.userData[0].results)

    }

    setAction = (obj) => {
        return (
            <>
                <Chip
                    label="Butter Chicken"
                    clickable
                    color="primary"
                    variant="outlined"
                />
                <Chip
                    className="mt-2 ml-2"
                    label={obj}
                    clickable
                    color="secondary"
                    variant="outlined"
                />
            </>
        )
    }

    conDate = (obj) => {
        let dateNew = new Date(obj).toDateString().split(' ').slice(1).join(' ');
        return (
            <Typography component="h4" className="td-font-status">{dateNew}</Typography>
        )
    }

    render() {
        const dataDump = createTable(this.context.userData[0].results, this.setAction, this.conDate)
        return (
            <div>
                <div className="row margin-card">
                    <div className="col-md-3 offset-1 mr-5 radius-card">
                        <Card>
                            <h2 className="header-main">High margin Recipes</h2>
                            <CircularProgress variant="determinate" value={25} className="circular-margin" />
                            <CircularProgress variant="determinate" value={75} className="circular-margin" />
                            <CircularProgress variant="determinate" value={55} className="circular-margin" />
                        </Card>
                    </div>
                    <div className="col-md-3 mr-5 radius-card">
                        <Card>
                            <h2 className="header-main">Low margin Recipes</h2>
                            <CircularProgress variant="determinate" value={45} className="circular-margin" />
                            <CircularProgress variant="determinate" value={85} className="circular-margin" />
                            <CircularProgress variant="determinate" value={55} className="circular-margin" />
                        </Card>
                    </div>
                    <div className="col-md-3 mr-5 radius-card ">
                        <Card>
                            <h2 className="header-main">Top fluctuating Recipes</h2>
                            <CircularProgress variant="determinate" value={65} className="circular-margin" />
                            <CircularProgress variant="determinate" value={35} className="circular-margin" />
                            <CircularProgress variant="determinate" value={45} className="circular-margin" />
                        </Card>
                    </div>
                </div>

                <Card >
                    <CustomTable
                        title=""
                        columns={[
                            { title: 'Name', field: 'name' },
                            { title: 'Last Updated', field: 'last_updated.date' },
                            { title: 'COGS%', field: 'cogs' },
                            { title: 'COST PRICE%', field: 'cost_price', },
                            { title: 'SALE PRICE%', field: 'sale_price', },
                            { title: 'CROSS MARGIN%', field: 'gross_margin', },
                            { title: 'TAGS / ACTIONS', field: 'manufacturing_outlet', }
                        ]}

                        data={dataDump}

                        options={{
                            sorting: true,
                            paginationType: "stepped",
                            paging: true,
                            selection: true,
                            filtering: false,
                            showTitle: false,
                            toolbar: true,
                            emptyRowsWhenPaging: false,
                            pageSize: 10,
                        }}
                    />



                </Card>
            </div>
        );
    }
}


HomeScreen.contextType = ContextMain;
export default HomeScreen;

