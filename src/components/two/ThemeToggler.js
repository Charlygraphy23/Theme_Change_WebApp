import React,{useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';


const ThemeToggler = ()=>{

   const [theme , setTheme] = useContext(ThemeContext);    

    return (
        <div>
            <button className="btn" onClick = { theme === 'light' ? () => setTheme('dark') : () => setTheme('light')} >  {theme === 'light' ? "Turn on Dark Mode" : "Turn off Dark Mode"}  </button>
        </div>
       
        
    )
}
export default ThemeToggler;