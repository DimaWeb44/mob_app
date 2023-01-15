import {View} from "react-native";
import {BarChart} from "react-native-chart-kit";
import {width} from "../scenes/inputs";

export const ChartBar = ({heightArr, ageArr}: any) => {
    return (<View style={{width: width}}>
            <BarChart
                data={{
                    labels: ageArr,
                    datasets: [
                        {
                            data: heightArr,
                            color: (opacity = 1) => `rgba(144, 124, 255, 1)`,
                        }
                    ]
                }}
                width={width - 40} // from react-native
                height={230}
                yAxisLabel={''}
                yAxisSuffix={''}
                showValuesOnTopOfBars={true}
                withHorizontalLabels={true}
                withInnerLines={false}
                chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    fillShadowGradient: '#907cff',
                    fillShadowGradientOpacity: 200,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(144, 124, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(69, 68, 89, ${opacity})`,
                    style: {
                        borderRadius: 30,
                    },
                }}
                style={{
                    marginVertical: 10,
                }}
            />
        </View>
    )
}
