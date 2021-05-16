import {GET_PROPERTY_DATA_API} from '../constants';

export const getPropertyData = async () => {
    try {
        const response = await fetch(GET_PROPERTY_DATA_API, {credentials: 'same-origin'});
        if (!response.ok) throw GET_PROPERTY_DATA_API;
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        throw GET_PROPERTY_DATA_API;
    }
};