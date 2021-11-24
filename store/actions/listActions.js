import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_LISTS, SET_ACTIVE_LIST_ID } from '../types';
import { STORAGE_KEYS } from '../../constants/index';
import store from '../';

export const getLists = (onSuccess = () => { }, onError = () => { }) => {
    return async dispatch => {
        try {
            const listsRes = await AyncStorage.getItem(STORAGE_KEYS.lists);
            const lists = listsRes ? JSON.parse(listsRes) : [];
            dispatch({
                type: SET_LISTS,
                payload: lists,
            });
            onSuccess();
        } catch (e) {
            console.log(e);
            onError();
        }
    }
}

export const createList = (name, onSuccess = () => { }, onError = () => { }) => {
    return async dispatch => {
        try {
            const newList = {
                name,
                id: `list-${new Date().getTime}`,
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
        } catch (e) {
            console.log(e);
            onError();
        }
    }
}