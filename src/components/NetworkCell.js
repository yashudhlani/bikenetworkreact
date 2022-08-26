import React, {memo} from "react";
import { StyleSheet, View, Text, Pressable, Dimensions, PixelRatio } from "react-native";

const NetworkCell = ({network, onClick}) => {
    return (
        <Pressable onPress={()=>{onClick()}}>
            <View style={styles.cellView}>
                <View style={{flex: 2}}>
                    <Text style={{fontSize: 30}} numberOfLines={2} adjustsFontSizeToFit={true}>{network.name}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 20}} numberOfLines={1} adjustsFontSizeToFit={true}>{`${network.location.city}, ${network.location.country}`}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cellView: {
        flexDirection: "row",
        margin: 10,
        height: 80,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    }
})

export default memo(NetworkCell)