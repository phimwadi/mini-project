import React from 'react'
import Config from '../config/Config'

const Homepage =() => {

    const logout = e =>{
        Config.auth().signOut();
    }

    return (
        <div>
            Home page
            <div>
            <button onClick={logout}>Log Out </button>
            </div>
        </div>
        
    )
}

export default Homepage;