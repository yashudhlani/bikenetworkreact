import React from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";

const Search = ({searching, setSearching, searchData, setSearchData}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.searchBox, {width: searching ? '80%' : '100%' }]}>
                <TextInput
                    style={{fontSize: 15 }}
                    placeholder="Search Networks"
                    onFocus={() => setSearching(true)}
                    value={searchData}
                    onChangeText={(value) => setSearchData(value)}
                />
            </View>
            {searching && <Button title="Cancel" onPress={() => {Keyboard.dismiss(); setSearching(false)}}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    searchBox: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        width: '100%'
    }
})

export default Search