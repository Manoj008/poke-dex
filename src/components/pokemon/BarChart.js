import { Bar } from "react-chartjs-2";

function BarChart({ data }) {
    // var da=[];
    // data.map(d => {

    // })
    console.log('in barchart  : ' + data);
    return (
        <div>
            <Bar
                data={{
                    labels: ['HP', 'Attacks', 'Defense', 'Speed',],
                    datasets: [{
                        data: data,
                        backgroundColor: 'rgb(219,242,242)',
                        borderColor: 'rgb(102,201,255)',
                        borderWidth: 1
                    }]
                }}
                options={{
                    legend: false,
                    scales: {
                        yAxes: [{
                            stacked: true,
                            display: false,
                            ticks: {
                                beginAtZero: true,
                            }

                        }],
                        xAxes: [{
                            stacked: true,
                            gridLines: { display: false, drawBorder: false }

                        }]
                    }
                }}
            />
        </div>
    );
};

export default BarChart;