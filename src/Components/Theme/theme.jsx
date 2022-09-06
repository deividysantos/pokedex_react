import React, {useState, useEffect} from "react";
import { RiSunFill } from 'react-icons/ri'
import { RiMoonLine } from 'react-icons/ri'
import './theme.css'

const Theme = (props) => {

    const [theme, setTheme] = useState({})

    useEffect(() => {
        localStorage.getItem('theme') === 'dark' ? dark() : light()
    },[])

    const changeTheme = () => {
        theme.name === 'dark' ? light() : dark();
        props.setTheme(localStorage.getItem('theme'));
    }

    const light = () => {
        setTheme({
            name: 'light',
            icon: <RiMoonLine className="theme"/> 
        })

        localStorage.setItem('theme', 'light');
    }

    const dark = () => {
        setTheme({
            name: 'dark',
            icon: <RiSunFill className="theme" color='white' />
        })

        localStorage.setItem('theme', 'dark');
    }

    return (
        <button className="buttonTheme" onClick={() => changeTheme()}>{theme.icon}</button>
    );    
}

export default Theme;