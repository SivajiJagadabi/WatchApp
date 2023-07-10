import React from 'react'


const ThemeAndVideoContext=React.createContext({
    isDarkTheme:false,
    toggleTheme:()=>{},
    savedVideos:[],
    addVideo:()=>{},
    activeTab:'Home',
    changeTab:()=>{},
})


export default ThemeAndVideoContext