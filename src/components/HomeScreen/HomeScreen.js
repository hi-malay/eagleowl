import { Card, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import CustomTable from '../common/Drawer/customTable/customTable'
import { ContextMain } from "../common/Drawer/ContextMain"
import { createTable } from "../common/Drawer/Helperfunction"
import Chip from '@material-ui/core/Chip';

class HomeScreen extends Component {

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
                    className="mt-2"
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
                <Card>
                    <CustomTable
                        title=""
                        columns={[
                            { title: 'Name', field: 'name' },
                            { title: 'Last Updated', field: 'last_updated.date' },
                            { title: 'COGS%', field: 'cogs' },
                            { title: 'COST PRICE%', field: 'cost_price', },
                            { title: 'SALE PRICE%', field: 'sale_price', },
                            { title: 'CROSS MARGIN%', field: 'gross_margin', },
                            { title: 'TAGS / ACTIONS', field: 'manufacturing_outlet', },
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
                            pageSize: 5,
                        }}
                    />
                </Card>
            </div>
        );
    }
}


HomeScreen.contextType = ContextMain;
export default HomeScreen;

