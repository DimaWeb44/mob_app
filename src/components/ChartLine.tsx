import {ScrollView} from "react-native";
import {LineChart,} from "react-native-chart-kit";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const ChartLine = ({ageArr, bmiArr}: any) => {
    return (<ScrollView horizontal={true} style={{width: wp(`${95}%`)}}>
            <LineChart
                data={{
                    labels: ageArr,
                    datasets: [
                        {
                            data: bmiArr,
                            color: (opacity = 1) => `rgba(144, 124, 255, 1)`,
                        }
                    ]
                }}
                width={wp(`${95 + ageArr.length * 5}%`)} // from react-native
                height={hp(`33%`)}
                withInnerLines={false}
                withOuterLines={false}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    fillShadowGradient: '#907cff',
                    fillShadowGradientOpacity: 200,
                    decimalPlaces: 0, // optional, defaults to 2dp
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
        </ScrollView>
    )
}