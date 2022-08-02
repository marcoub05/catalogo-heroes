import React from 'react'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { HeroScreen } from '../components/hero/HeroScreen'

export const DashboardRoutes = () => {
  return (
    <div className='container'>
        <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelScreen/>}/>
            <Route path="dc" element={<DcScreen/>}/>
            <Route path="search" element={<SearchScreen/>}/>
            <Route path="hero/:id" element={<HeroScreen/>}/>
        </Routes>
    </div>
  )
}
