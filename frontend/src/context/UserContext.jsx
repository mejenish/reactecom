import React, { createContext } from 'react'

export const realContext = createContext();

const UserContext = ({children}) => {

    const userData = {
        name: "Random Raju",
        email: "Random@gmail.com",
        phone: "+977-9869749646"
    }

  return (
    <div>
      <realContext.Provider value={userData}>
      {children}
      </realContext.Provider>
    </div>
  )
}

export default UserContext
