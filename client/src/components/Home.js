import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/action';
import Nav_bar from './Nav_bar'
import ProuductList from './ProuductList';

const Home = () => {
    const { product } = useSelector((state) => state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const [search, setSearch] = React.useState('')
    return (
        <div>
            <Nav_bar search={search} setSearch={setSearch} />
            <ProuductList productList={product.filter(el=>el.productName.toLowerCase().includes(search.toLowerCase()))}/>
        </div>
    )
}

export default Home
