import AsyncStorage from '@react-native-async-storage/async-storage';

import { SET_LISTS, SET_ACTIVE_LIST_ID } from '../types';
import { STORAGE_KEYS } from '../../constants';
import store from '../';

// Get lists action
export const getLists = (onSuccess = () => { }, onError = () => { }) => {
    return async dispatch => {
        try {
            const listsRes = await AsyncStorage.getItem(STORAGE_KEYS.lists);
            const lists = listsRes ? JSON.parse(listsRes) : [];

            dispatch({
                type: SET_LISTS,
                payload: lists,
            });
            onSuccess();
        } catch (err) {
            console.log(err);
            onError();
        }
    };
};

// Create list action
export const createList = (name, onSuccess = () => { }, onError = () => { }) => {
    return async dispatch => {
        try {
            const newList = {
                name,
                id: `list-${new Date().getTime()}`,
            };

            const { lists } = store.getState().list;

            const listsCopy = [...lists];
            listsCopy.push(newList);
            await AsyncStorage.setItem(STORAGE_KEYS.lists, JSON.stringify(listsCopy));

            dispatch({
                type: SET_LISTS,
                payload: listsCopy,
            });
            onSuccess();
        } catch (err) {
            console.log(err);
            onError();
        }
    };
};
