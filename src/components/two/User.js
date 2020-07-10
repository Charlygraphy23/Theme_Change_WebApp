import React,{useContext} from 'react';
import ThemeToggler from './ThemeToggler'
import ThemeContext from '../../context/ThemeContext';
import UserContext from '../../context/UserContext'
import AppTheme from '../one/AppTheme'



const User = () => {

    const theme = useContext(ThemeContext)[0]; 
    const currentTheme = AppTheme[theme];

    return(
                   <UserContext.Consumer>
                       {
                           (con) => (
                                        <div style={{backgroundColor : currentTheme.backgroundColor , color : currentTheme.textColor , textAlign : 'center', padding : '30px' , transition : '1s all'}} >
                                        <h1>---- UserDetails ----</h1>
                                        <h3>Id : {con.data.id}</h3>
                                        <h3>Name : {con.data.name}</h3>
                                        <h3>Address :  {con.data.address}</h3>
                                            <ThemeToggler/>
                
                                        </div>
                           )
                       }
                   </UserContext.Consumer>
    )
}
export default User;