import {View} from "react-native";
import {LineChart,} from "react-native-chart-kit";
import {width} from "../scenes/inputs";

export const Chart = ({data}: any) => {
    return (<View style={{width: width, alignItems: "center"}}>
            <LineChart
                data={{
                    labels: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                            ],
                            color: (opacity = 1) => `rgba(144, 124, 255, 1)`,
                        }
                    ]
                }}
                width={width} // from react-native
                height={230}
                withHorizontalLabels={false}
                withInnerLines={false}
                withOuterLines={false}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    fillShadowGradient: '#907cff',
                    fillShadowGradientOpacity: 200,
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(144, 124, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(69, 68, 89, ${opacity})`,
                    style: {
                        borderRadius: 30
                    },
                    propsForBackgroundLines: {
                        fill: "#907cff",
                    },
                    propsForDots: {
                        r: "7",
                        fill: "#FF5CBE",
                        strokeWidth: "3",
                        stroke: "#ffffff"
                    }
                }}
                bezier
                style={{
                    marginVertical: 10,
                    borderRadius: 16
                }}
            />
        </View>
    )
}