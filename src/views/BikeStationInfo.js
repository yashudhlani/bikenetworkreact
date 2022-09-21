import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const BikeStationInfo = ({route}) => {

    const [totalSlots, setTotal] = useState(0)
    const [emptySlots, setEmpty] = useState(0)

    const region = 
        {
            latitude: route.params.station.latitude,
            longitude: route.params.station.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }

    useEffect(() => {
        var station = route.params.station
        var empty = station.empty_slots
        var total = station.free_bikes + empty

        const interval = setInterval(() => {
            if (emptySlots === empty && totalSlots === total) {
                clearInterval(interval)
            }

            setEmpty((prev) => {
                if (prev < empty) {
                    return prev + 1
                } else return prev
            })

            setTotal((prev) => {
                if (prev < total) {
                    return prev + 1
                } else return prev
            })
        }, 200)

        return () => clearInterval(interval)
    }, [])

    return (
        <View style={{flexDirection: 'column', flex: 1}}>
            <View style={{flex: 3}}>
                <MapView
                    style= {{ height: '100%', width: '100%' }}
                    region={region}
                >
                    <Marker
                        title="This is a title"
                        description="This is a description"
                        coordinate={region}
                    />
                </MapView>
            </View>
            <View style={{flex: 4, backgroundColor: '#525df2'}}>
                <View style={styles.slots}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 40, color: '#ffffff' }}>{totalSlots}</Text>
                        <Text style={{ fontSize: 30, color: '#ffffff' }}>Total</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 40, color: '#ffffff' }}>{emptySlots}</Text>
                        <Text style={{ fontSize: 30, color: '#ffffff' }}>Empty</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text>Progress View</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 35, color: '#ffffff', textAlign: 'center' }} numberOfLines={3} adjustsFontSizeToFit={true}>{route.params.station.name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slots: {
        flexDirection: 'row',
        flex: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 50
    }
})

export default BikeStationInfo