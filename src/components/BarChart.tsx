import {ScrollView} from "react-native";
import {BarChart} from "react-native-chart-kit";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const ChartBar = ({heightArr, ageArr}: any) => {
    return (<ScrollView horizontal={true} style={{width: wp(`${95}%`)}}>
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
                width={wp(`${95 + ageArr.length * 5}%`)} // from react-native
                height={hp(`33%`)}
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
        </ScrollView>
    )
}
