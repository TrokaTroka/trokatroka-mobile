import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Button from "./Button";
import { connect } from "react-redux";
import { categoryFilter } from "../redux/filters/CategoryFilter";
import { toggleCategory, getCategories } from "../redux/actions/CategoryAction";
import {theme} from "../styles/theme"

const CategorySelectableList = ({ getCategories, categoryList, categoriesSelected, onToggleCategory, style, afterToggleCategory, renderCategoriesSelecteds}) => {
    const [selectedIds, setSelectedIds] = React.useState([]);
    const renderItem = ({ item }) => {
        return (
            <Button name={selectedIds.includes(item.id) ? 'primary' : 'secondary'} style={{width: item.name.length*10, marginHorizontal: 5}} title={item.name} onPress={() => onPress(item)}/>
        );
    };

    const onPress = ({id}) => {
        setSelectedIds(selectedIds.includes(id) ? selectedIds.filter(item => item !== id) : [...selectedIds, id]);
        if(onToggleCategory) {
            onToggleCategory(id);
        }
        if(afterToggleCategory) {
            afterToggleCategory();
        }
    }

    useEffect(() => {
        getCategories();
        if(renderCategoriesSelecteds) {
            setSelectedIds(categoriesSelected);
        }
    }, []);

	return (
        <View style={styles.viewList}>

			<FlatList 
				data={categoryList}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				style={[styles.flatList, style]}
				horizontal={true}
                showsHorizontalScrollIndicator={false}
			/>
        </View>
	);
};

const styles = StyleSheet.create({
	viewList: {
        width: '100%',
        height: '10%',
	},
    flatList: {
        flex: 1,
        width: '100%',
    },
});

export default connect(categoryFilter, {toggleCategory, getCategories})(CategorySelectableList);
