import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
	Haze: {
		iconName: "weather-hail",
		gradient: ["#4da0b0", "#d39d38"],
		title: "Haze",
		subtitle: "Just don't go outside"
	},
	Thunderstorm: {
		iconName: "weather-lighting",
		gradient: ["#C33764", "#1D2671"],
		title: "",
		subtitle: ""
	},
	Drizzle: {
		iconName: "weather-hurricane",
		gradient: ["#34e89e", "#0f3443"],
		title: "",
		subtitle: ""
	},
	Rain: {
		iconName: "weather-rainy",
		gradient: ["#093028", "#237A57"],
		title: "",
		subtitle: ""
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#E6DADA", "#274046"],
		title: "",
		subtitle: ""
	},
	Atmosphere: {
		iconName: "weather-windy",
		gradient: ["#654ea3", "#eaafc8"],
		title: "",
		subtitle: ""
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#1D976C", "#93F9B9"],
		title: "",
		subtitle: ""
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#bdc3c7", "#2c3e50"],
		title: "",
		subtitle: ""
	},
	Mist: {
		iconName: "weather-fog",
		gradient: ["#544a7d", "#ffd452"],
		title: "",
		subtitle: ""
	},
};

export default function Weather({ temp, condition }) {
	return (
		<LinearGradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					size={96}
					name={weatherOptions[condition].iconName || "weather-sunset"}
					color="white"
				/>
				<Text style={styles.temp}>{temp}º</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer}}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
		</LinearGradient>
	);
};

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm", 
		"Drizzle", 
		"Rain", 
		"Snow", 
		"Atmosphere", 
		"Clear", 
		"Clouds",
		"Haze",
		"Mist"
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	temp: {
		fontSize: 42,
		color: "white"
	},
	halfContainer: {
		flex:1,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 40,
		fontWeight: "300",
		marginBottom: 10
	},
	subtitle: {
		color: "white",
		fontWeight: "600",
		fontSize: 20
	},
	textContainer: {
		width: "90%",
		paddingHorizontal: 20,
		alignItems: "flex-start"
	}
});