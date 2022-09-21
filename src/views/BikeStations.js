import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import StationCell from "../components/StationCell";
import store from "../store";
import { addStations } from "../slice/stationsSlice";

const state = store.getState()

const BikeStations = ({navigation, route}) => {

    const [stations, setStations] = useState([])

    useEffect(() => {
        console.log(state)
        if (state.stations[route.params.network.name]) {
            setStations(state.stations[route.params.network.name])
        } else {
            fetch(`https://api.citybik.es${route.params.network.href}`, {
                method: 'GET'
            }).then((response) => response.json())
            .then((response) => {
                store.dispatch(addStations(response.network))
                setStations(response.network.stations)
            }).catch((e) => {
                console.log(e)
            })
        }
    }, [])

    return (
        <>
            <View style={styles.headerSection}>
                <Text style={styles.heading}>{route.params.network.name}</Text>
            </View>
            <ScrollView style={{backgroundColor: '#d9dbda'}}>
                { stations.length > 0 ? 
                    <View style={styles.stationList}>
                        { 
                            stations.map((station, i) => {
                                return (
                                    <StationCell key={i} navigation={navigation} station={station}/>
                                )
                            })
                        }
                    </View> 
                    : <ActivityIndicator/>
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    headerSection: {
        flexDirection: "row",
        backgroundColor: '#525df2',
        height: 80,
        padding: 10
    },
    heading: {
        fontSize: 40,
        color: '#ffffff'
    },
    stationList: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})

export default BikeStations