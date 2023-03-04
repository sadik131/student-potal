import React, { useContext, useEffect, useState } from "react"

const ReactContex = React.createContext()


const AppProvider = ({ children }) => {
    const [wrong, setWrong] = useState("")
    const [user, setUser] = useState({})
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

    
    // const storToken = localStorage.getItem("accessToken")

    // useEffect(() => {

    //     console.log(storToken)
    //     fetch("http://localhost:5000/api/v1/user/token", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify({ token:storToken })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.status === "success") {
    //                 // console.log(data,"token value")
    //                 setUser(data.data[0])
    //             }
    //             else {
    //                 console.log("userLoged Out")
    //             }
    //         })
    // }, [])


    return <ReactContex.Provider value={value}>{children}</ReactContex.Provider>
}


const useGlobalContex = () => {
    return useContext(ReactContex)
}


export { ReactContex, AppProvider, useGlobalContex }