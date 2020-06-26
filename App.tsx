import React, { useState } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import DetailsForm from "./src/ui/szczegoly/DetailsForm";
import FilterView from "./src/ui/filtry/FilterView";
import SearchButton from "./src/component/searchButton";
import DarkModeButton from "./src/component/darkModeButton";
import { AppearanceProvider } from "react-native-appearance";
const Stack = createStackNavigator();

function MyStack() {
  const [isDark, setIsDark] = useState(false);
  const MyTheme = {
    dark: false,
    colors: {
      primary: "rgb(83, 211, 204)",
      background: "rgb(242, 242, 242)",
      card: "rgb(83, 211, 204)",
      text: "rgb(28, 28, 30)",
      border: "rgb(75, 73, 73)",
    },
  };
  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: "rgb(31, 31, 31)",
      background: "rgb(18, 18, 18)",
      card: "rgb(31, 31, 31)",
      text: "rgb(242, 242, 242)",
      border: "rgb(75, 73, 73)",
    },
  };
  return (
    <AppearanceProvider>
      <NavigationContainer theme={isDark ? MyDarkTheme : MyTheme}>
        <Stack.Navigator initialRouteName="FilterView">
          <Stack.Screen
            name="Details"
            component={DetailsForm}
            options={({ navigation }) => ({
              headerRight: () => (
                <View>
                  <SearchButton
                    onClick={() => {
                      navigation.navigate("FilterView");
                    }}
                  />
                </View>
              ),
              headerStyle: {
                backgroundColor: isDark
                  ? MyDarkTheme.colors.card
                  : MyTheme.colors.card,
              },
              headerTintColor: "#fff",
              title: "Details",
            })}
          />
          <Stack.Screen
            name="FilterView"
            component={FilterView}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: isDark
                  ? MyDarkTheme.colors.card
                  : MyTheme.colors.card,
              },
              headerTintColor: "#fff",
              title: "Filters",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
export default MyStack;
