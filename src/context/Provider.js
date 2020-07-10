import React ,{useState} from 'react';
import UserContext from './UserContext'

const Provider = (props) => {

   
    const [userInformation, setUserInformation] = useState({
        id : '003',
        name : 'Amal Chand',
        address : 'Mumbai'
    })

    return (
        <UserContext.Provider value={{
                data : userInformation,
                setData : (user) => {
                    setUserInformation(
                        {
                            name : user.name,
                            address : user.address
                        }
                    )
                }
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default Provider;