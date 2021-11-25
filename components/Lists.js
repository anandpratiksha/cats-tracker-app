import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Button, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import globalStyles from '../styles/global'

const Lists = ({ navigation }) => {

    const { lists } = useSelector(state => state.list);

    const itemClickHandler = (item) => {
        navigation.navigate('List', { name: item.name, id: item.id });
    };

    return (
        <View style={styles.container}>
            {lists.length > 0 ? <FlatList
                keyExtractor={(item) => item.id}
                contentContainerStyle={globalStyles.listContainer}
                data={lists}
                renderItem={({ item }) => <TouchableOpacity style={globalStyles.listItem} onPress={() => itemClickHandler(item)}>
                    <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>}
            /> : <Text style={globalStyles.noData}>Start your PAWTRACK , Add Lists !! </Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        // flex: 1,
    },
    itemText: {
        fontSize: 26,
        color: '#000',
    },
});

export default Lists
