import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetch('https://stark-bastion-06570.herokuapp.com/item')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [setItems]);
    return [items, setItems];
};

export default useItems;