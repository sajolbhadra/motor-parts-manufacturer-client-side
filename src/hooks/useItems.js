import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [setItems]);
    return [items, setItems];
};

export default useItems;