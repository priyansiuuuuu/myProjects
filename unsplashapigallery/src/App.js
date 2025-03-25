import React, { createContext, useState } from 'react';
import UseAxios from './hooks/UseAxios';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const ImageContext = createContext()

function App(){
  const [searched, setSearched] = useState("")
  const {response, isLoading, error, fetchData} = UseAxios(`search/photos?page=1&query=nature&&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
  // console.log(response)
  const value = {
    response,
    isLoading,
    error,
    setSearched,
    searched,
    fetchData
  }
  return(
    <>
    <ImageContext.Provider value={value}>
      <Header/>
      <Main/>
    </ImageContext.Provider>
    </>
  )
  

}

export {App}