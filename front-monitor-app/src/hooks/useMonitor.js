import { useReducer } from "react"
import { monitorReducer } from "../reducers/monitorReducer"
import { getAllData } from "../services/monitorService"

export const useMonitor = () => {
    const [testersData, dispatch] = useReducer(monitorReducer, {})

    const getAllBurninData = async () => {
        try {
            const response = await getAllData();
            dispatch({
                type: 'loadData',
                payload: response.data
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return {
        testersData,
        getAllBurninData,
    }
}