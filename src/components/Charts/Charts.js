import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

export default class Charts extends Component {
    render() {
        function createData(array){
            let data = []
            array.forEach(element => {
                let newElement = { "value": element };
                data.push(newElement);
            });
            return data;
        }

        const firstArray = [500, 300, 350, 650, 200]
        const firstData = createData(firstArray);
       
        const secondArray = [300, 500, 350, 200, 650]
        const secondData = createData(secondArray);

        const thirdArray = [500, 100, 350, 250, 200]
        const thirdData = createData(thirdArray);

        const fourthArray = [340, 300, 250, 150, 400]
        const fourthData = createData(fourthArray);

        const fifthArray = [510, 30, 30, 150, 90]
        const fifthData = createData(fifthArray);

        const colorDefinition = (
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
        )
        return (
            <div className="Charts">
                <Header as='h2' content='DCM - Data Centering Middleware' subheader='Charts' dividing />

                <Grid columns={2} centered>
                    <Grid.Row>
                        <AreaChart width={730} height={250} data={firstData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                {colorDefinition}
                            </defs>
                            <XAxis />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>

                        <AreaChart width={730} height={250} data={secondData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                {colorDefinition}
                            </defs>
                            <XAxis />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                    </Grid.Row>

                    <Grid.Row>
                        <AreaChart width={730} height={250} data={thirdData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                {colorDefinition}
                            </defs>
                            <XAxis/>
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>

                        <AreaChart width={730} height={250} data={fourthData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                {colorDefinition}
                            </defs>
                            <XAxis />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                    </Grid.Row>

                    <Grid.Row>
                        <AreaChart width={730} height={250} data={fifthData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                {colorDefinition}
                            </defs>
                            <XAxis />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                    </Grid.Row>
                </Grid>


            </div>
        )
    }
}
