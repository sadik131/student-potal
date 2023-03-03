import React, { useContext, useState } from "react"

const ReactContex = React.createContext()


const AppProvider = ({ children }) => {
    const [wrong, setWrong] = useState("")
    const [user, setUser] = useState("")
    const [teacherPost, setTeacherPost] = useState([])
    const [token, setToken] = useState("")

    const value = {
        wrong,
        setWrong,
        setUser,
        user,
        setToken,
        token,
        teacherPost,
        setTeacherPost
    }

    return <ReactContex.Provider value={value}>{children}</ReactContex.Provider>
}


const useGlobalContex = () => {
    return useContext(ReactContex)
}


export { ReactContex, AppProvider, useGlobalContex }