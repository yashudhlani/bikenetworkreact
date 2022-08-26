import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BikeNetworks from "./views/BikeNetworks";
import BikeStationInfo from "./views/BikeStationInfo";
import BikeStations from "./views/BikeStations";


const Stack = createNativeStackNavigator()
const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BikeNetwork" screenOptions={{headerStyle: {backgroundColor: '#525df2'}, headerShadowVisible: false}}>
                <Stack.Screen 
                    name="BikeNetwork"
                    component={BikeNetworks}
                    options={{ title: '' }}
                    />
                <Stack.Screen 
                    name="BikeStations"
                    component={BikeStations}
                    options={{ title: '', headerBackTitle: 'Bike Network', headerTintColor: '#ffffff' }}
                    />
                <Stack.Screen 
                    name="BikeStationInfo"
                    component={BikeStationInfo}
                    options={{ title: '', presentation: 'modal', headerShown: false }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default Navigation