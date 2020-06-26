import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { getMagazineById } from "../../data/MagazineRepository";
import { useTheme } from "@react-navigation/native";
import md5 from "react-native-md5";

class DetailsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.route.params.id,
      imie: props.route.params.imie,
      nazwisko: props.route.params.nazwisko,
      isLoading: true,
    };
  }

  async componentDidMount() {
    const response = await getMagazineById(
      md5.str_md5( this.state.nazwisko + this.state.imie)
    );
    await this.setState({ magazine: response, isLoading: false });
  }
  render() {
    return this.state.isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ ...styles.headerText, color: this.props.theme.text }}>
            result:
          </Text>
          <Text
            style={{ ...styles.descriptionText, color: this.props.theme.text }}
          >
            {this.state.magazine.result}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    height: 40,
    marginTop: 10,
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  descriptionText: {
    fontSize: 14,
  },
});

export default (props) => {
  const { colors } = useTheme();
  return <DetailsForm {...props} theme={colors} />;
};
