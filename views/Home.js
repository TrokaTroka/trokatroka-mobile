import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
	StyleSheet,
	View,
	TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {BookList, CategorySelector} from "../components/";

import { connect } from "react-redux";
import {bookFilter} from "../redux/filters/BookFilter";
import {categoryFilter} from "../redux/filters/CategoryFilter";
import { getBooksByIdsCategory } from "../redux/actions/BookAction";
import { toggleCategory } from "../redux/actions/CategoryAction";
import Loading from "./Loading";

const mapStateToProps = () => {
	return {bookFilter, categoryFilter}
}

const Home = ({isLoading, getBooksByIdsCategory, toggleCategory }) => {

	const [filter, setFilter] = React.useState("");

	return (
		<View style={styles.container}>
			<View style={styles.searchSection}>
				<TextInput
					style={styles.searchInput}
					placeholder="Search for a book"
					onChangeText={(value) => setFilter(value)}
				/>
				<Ionicons
					style={styles.searchIcon}
					name="search-outline"
					size={24}
					color={"#000"}
				/>
			</View>
			{isLoading ? (<Loading />): (<CategorySelector style={styles.categoryList} onToggleCategory={toggleCategory} afterToggleCategory={() => getBooksByIdsCategory()} renderCategoriesSelecteds/>)}
			<BookList filter={filter} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		height: "100%",
		width: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	searchSection: {
		position: "absolute",
		zIndex: 1000,
		top: 40,
		left: 0,
		flex: 1,
		padding: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderBottomColor: "#e8e8e8",
		width: "100%",
	},
	searchIcon: {
		padding: 10,
	},
	searchInput: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		backgroundColor: "#fff",
		color: "#424242",
	},
	categoryList: {
		position: "absolute",
		top: 120
	}
});



export default connect(mapStateToProps, {getBooksByIdsCategory, toggleCategory})(Home);
