import React, { Component } from 'react'
import { Header, Grid, Label, Segment } from 'semantic-ui-react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { getInitialData } from "./../../DataProvider";

export default class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: getInitialData()
        };
    }
    render() {

        function createData(array){
            let data = []
            array.forEach(element => {
                let newElement = { "value": element };
                data.push(newElement);
            });
            return data;
        }

        const dataKey = 'array';
        const titleKey = 'title';

        const colorDefinition = (
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
        )

        return (
            <div className="Charts">
                <Header as='h2' content='DCM - Data Centering Middleware' subheader='Charts' dividing />

                <Grid columns={2} padded>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment >
                                <Label attached='top left'>
                                    {this.state.data[0][titleKey]}
                                </Label>
                                <AreaChart width={730} height={250} data={createData(this.state.data[0][dataKey])}
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
                            </Segment>
                        </Grid.Column>
                        
                        <Grid.Column>
                            <Segment >
                                <Label attached='top left'>
                                    {this.state.data[1][titleKey]}
                                </Label>
                                <AreaChart width={730} height={250} data={createData(this.state.data[1][dataKey])}
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
                            </Segment>
                        </Grid.Column>
                        
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Segment>
                                <Label attached='top left'>
                                    {this.state.data[2][titleKey]}
                                </Label>
                                <AreaChart width={730} height={250} data={createData(this.state.data[2][dataKey])}
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
                            </Segment>
                        </Grid.Column>
                        
                        <Grid.Column>
                            <Segment>
                                <Label attached='top left'>
                                    {this.state.data[3][titleKey]}
                                </Label>
                                <AreaChart width={730} height={250} data={createData(this.state.data[3][dataKey])}
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
                            </Segment>
                        </Grid.Column>
                        
                    </Grid.Row>

                    <Grid.Row centered>
                        <Grid.Column>
                            <Segment>
                                <Label attached='top left'>
                                    {this.state.data[4][titleKey]}
                                </Label>
                                <AreaChart width={730} height={250} data={createData(this.state.data[4][dataKey])}
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
                            </Segment>
                        </Grid.Column>
                        
                    </Grid.Row>
                </Grid>


            </div>
        )
    }
}
