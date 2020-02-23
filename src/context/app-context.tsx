import React, { useState } from 'react';

export interface IAppContext {
    isLoggedIn: boolean
    auth: {
        id: number
        name: string
    }
    setIsLoggedIn: (value: boolean) => void
}

export const AppContext = React.createContext<IAppContext>(null)

export const AppContextConsumer = AppContext.Consumer

export const AppContextProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [auth, setAuth] = useState<{name: string, id: number}>();

    return <AppContext.Provider value={{auth, isLoggedIn, setIsLoggedIn}}>
        {props.children}
    </AppContext.Provider>
}