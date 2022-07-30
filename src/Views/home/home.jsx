import Search from '../../Components/Search/search';
import Painel from '../../Components/Painel/painel';
import { ThemeProvider } from 'styled-components'
import Theme from "../../Components/Theme/theme";
import GlobalStyles from '../../style/globalStyles'
import { lightTheme } from '../../style/lightTheme'
import { darkTheme } from '../../style/darkTheme'
import React, {useState} from "react";

const Home = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('theme'))

    return (
        <ThemeProvider theme={isDarkTheme === 'dark' ? darkTheme : lightTheme} >
        <GlobalStyles />
            <div className='app'>
                <Theme setTheme={setIsDarkTheme} />
                <Search /> 
                <Painel />
            </div>
        </ThemeProvider>
    );
}

export default Home;