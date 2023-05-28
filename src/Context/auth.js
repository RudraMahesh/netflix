import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../Firebase"
import { setDoc, doc } from "firebase/firestore";
import axios from "axios";
import movieTrailer from "movie-trailer";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [one, setOne] = useState()
    const [user, setUser] = useState({})
    const [query, setQuery] = useState([])
    const [data, setData] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    const [openInfo, setOpenInfo] = useState(false)
    const [sendTitle, setSendTitle] = useState()
    const [sign, setSign] = useState("")
    const [saved, setSaved] = useState([])

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut()
    }

    function searchApi() {
        setTimeout(async () => {
            let data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e15e45b5fb06c72a11c5c80c440a1cce&language=en-US&query=${query}&page=1&include_adult=false&region=asian`)
            setData(data.data.results)
        }, 1000)
    }

    const handleTrailer = (movie) => {
        movieTrailer(movie?.title || "").then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get("v"))
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    })

    return (
        <AuthContext.Provider value={{ signUp, user, logIn, logOut, searchApi, data, setQuery, query, trailerUrl, setTrailerUrl, one, setOne, openInfo, setOpenInfo, sendTitle, setSendTitle, handleTrailer, sign, setSign, saved, setSaved }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}