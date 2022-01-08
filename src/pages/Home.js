import { Input, message, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryBox from '../components/CountryBox';
import MenuComp from '../components/MenuComp';
import { getCountriesSuccess, getCountriesRequest, getCountriesFailed } from '../store/actions/actions';

const Home = () => {
    const dispatch = useDispatch();
    const dataStore = useSelector(state => state.dataR.toJS());
    const [keyword, setkeyword] = useState(null);
    const [filteredData, setfilteredData] = useState(dataStore.countries);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const fetchCountries = () => {
        dispatch(getCountriesRequest());
        fetch('https://restcountries.com/v2/all?fields=name,region,flag', { method: 'GET' })
            .then(response => response.json())
            .then(parsedJSON => dispatch(getCountriesSuccess(parsedJSON)))
            .catch(e => dispatch(getCountriesFailed(`${e}`)));
    }
    const handleKeyword = (e) => {
        if (e) {
            setkeyword(e.target.value);
        }
    }
    useEffect(() => {
        fetchCountries();
    }, []);
    useEffect(() => {
        if (keyword) {
            const searchkey = `${keyword}`.toLowerCase();
            const filtered = dataStore.countries.filter(country => Object.keys(country).some(property => country[property].toLowerCase().includes(searchkey)))
            setfilteredData(filtered);
        }
        else {
            setfilteredData(dataStore.countries);
        }
    }, [keyword]);
    useEffect(() => {
        setfilteredData(dataStore.countries);
    }, [dataStore.countries.length]);
    return (
        <div className='homeContainer'>
            <div className='homeHeader'>
                <div className='homeHeaderLeft'>Countries</div>
            </div>
            {/* <MenuComp mode='horizontal'
            // mode={isMobile ? "vertical" : "horizontal"}
            /> */}
            <div className='countryboxContainer'>
                <div><Input value={keyword} onChange={e => handleKeyword(e)} size='middle' className='userInput signinWidth' placeholder='Search' /></div>
                {
                    dataStore.isFetching ? 'Loading..'
                        : filteredData.map(country => <CountryBox country={country} />)
                }
            </div>
        </div>
    )
}
export default Home;