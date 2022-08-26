import React, {memo} from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const StationCell = ({navigation, station}) => {
    return (
        <Pressable onPress={() => navigation.navigate('BikeStationInfo', {station: station})}>
            <View style={styles.stationCell}>
                <View style={{flex: 3}}>
                <   Text style={{fontSize: 30}} numberOfLines={3} adjustsFontSizeToFit={true}>{station.name}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 15}}>{`Empty Slots: ${station.empty_slots ? station.empty_slots : 0}`}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    stationCell: {
        backgroundColor: '#ffffff',
        width: 160,
        height: 160,
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    }
})

export default memo(StationCell)