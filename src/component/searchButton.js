import React from "react";

import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function SearchButton({ onClick }) {
  return (
    <TouchableOpacity onPress={() => onClick()}>
      <Image source={require("../../assets/search_icon.png")} />
    </TouchableOpacity>
  );
}

export default SearchButton;
