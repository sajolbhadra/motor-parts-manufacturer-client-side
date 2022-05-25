import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useUpdateItems = () => {
    const {id} = useParams();
    const [updateItems, setUpdateItems] = useState({});
    useEffect( () => {
        fetch(`http://localhost:5000/item/${id}`)
        .then(res => res.json())
        .then(data => setUpdateItems(data))
    }, [setItems]);
    return [updateItems, setUpdateItems];
};

export default useUpdateItems;