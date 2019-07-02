import React, { Component } from "react";
import { Header, Grid, Label, Segment } from "semantic-ui-react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from "recharts";

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      data: []
    };
    this.eventSource = new EventSource("http://localhost:8080/events");
  }

  componentDidMount() {
    this.eventSource.onmessage = e => this.updateDataState(JSON.parse(e.data));
  }

  updateDataState(dataState) {
    console.log(dataState);
    this.setState(Object.assign({}, { title: dataState.title }));
    this.setState(Object.assign({}, { data: dataState.metrics }));
  }

  render() {
    function createData(array) {
      let data = [];
      array.forEach(element => {
        let newElement = { value: element };
        data.push(newElement);
      });
      return data;
    }

    const colorDefinition = (
      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
      </linearGradient>
    );

    return (
      <div className="Charts">
        <Header
          as="h2"
          content="DCM - Data Centering Middleware"
          subheader="Charts"
          dividing
        />

        <Grid columns={2} padded>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Label attached="top left">Média</Label>
                <AreaChart
                  width={730}
                  height={250}
                  data={createData(
                    this.state.data.map(metric => metric.average)
                  )}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>{colorDefinition}</defs>
                  <XAxis />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Label attached="top left">Mediana</Label>
                <AreaChart
                  width={730}
                  height={250}
                  data={createData(
                    this.state.data.map(metric => metric.median)
                  )}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>{colorDefinition}</defs>
                  <XAxis />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Label attached="top left">Variância</Label>
                <AreaChart
                  width={730}
                  height={250}
                  data={createData(
                    this.state.data.map(metric => metric.variance)
                  )}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>{colorDefinition}</defs>
                  <XAxis />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Label attached="top left">Desvio Padrão</Label>
                <AreaChart
                  width={730}
                  height={250}
                  data={createData(
                    this.state.data.map(metric => metric.standard_deviation)
                  )}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>{colorDefinition}</defs>
                  <XAxis />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Grid.Column>
              <Segment>
                <Label attached="top left">Moda</Label>
                <AreaChart
                  width={730}
                  height={250}
                  data={createData(this.state.data.map(metric => metric.mode))}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>{colorDefinition}</defs>
                  <XAxis />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
