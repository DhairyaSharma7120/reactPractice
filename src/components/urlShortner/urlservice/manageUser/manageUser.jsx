import React, { Component } from 'react'
import Chart from "chart.js";
import './manageUser.scss'

export default class ManageUser extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "polarArea",
            data: {
                //Bring in data
                labels: ["America", "Africa", "India"],
                datasets: [
                    {    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                       
                      ],
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div className="cusChartBody">
                <h1 className="cusHeader">USERS FROM DIFFRENT LOCATION</h1>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}