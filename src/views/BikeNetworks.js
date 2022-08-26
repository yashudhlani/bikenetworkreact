import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from "react-native";
import NetworkCell from "../components/NetworkCell";
import Search from "../components/Search";


const BikeNetworks = ({ navigation }) => {

    const [networks, setNetworks] = useState([])
    const [searching, setSearching] = useState(false)
    const [searchData, setSearchData] = useState('') 

    useEffect(() => {
        const getNetworks = async () => {
            const response = await fetch('https://api.citybik.es/v2/networks')
            const networksData = await response.json()
            setNetworks(networksData.networks)
        }
        getNetworks()
    }, [])

    const onCellClick = (network) => {
        navigation.navigate('BikeStations', {network: network})
    }

    const loadNetworkCell = ({item, i}) => {

        if (searchData === '' || item.name.toLowerCase().indexOf(searchData.toLowerCase().trim()) > -1) {
            return (
                <NetworkCell key={i} network={item} onClick={() => onCellClick(item)}/>
            )
        }
    }

    return (
        <>
            <View style={styles.headerSection}>
                <Text style={styles.heading}>Bike Networks</Text>
            </View>
            <View style={{backgroundColor: '#d9dbda'}}>
                <Search searching={searching} setSearching={(value) => setSearching(value)} searchData={searchData} setSearchData={(value)=> setSearchData(value)}/>
                {networks && networks.length > 0 ? 
                    <FlatList 
                        data={networks}
                        renderItem={loadNetworkCell}
                        initialNumToRender={8}
                    /> : <ActivityIndicator style={{paddingTop: 10}} />}
            </View>
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
        color: 'white'
    }
})

export default BikeNetworks