import React, { useState } from 'react';

export interface IAppContext {
    scans: string[]
    setScans: (value: string[]) => void
}

export const AppContext = React.createContext<IAppContext>(null)

export const AppContextConsumer = AppContext.Consumer

export const AppContextProvider = (props: any) => {
    const [scans, setScans] = useState<string[]>([])

    return <AppContext.Provider value={{ scans, setScans }}>
        {props.children}
    </AppContext.Provider>
}