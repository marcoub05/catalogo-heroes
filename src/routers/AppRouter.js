import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { DashboardRoutes } from './DashboardRoutes'
import { LoginScreen } from '../components/login/LoginScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'
import { HeroesApp } from '../HeroesApp'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* <Route path="/login" element={<LoginScreen />} /> */}
        
        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen/>
          </PublicRoute>
        }
          
        />

        <Route path="/*" element={
          <PrivateRoute>
              <DashboardRoutes/>
          </PrivateRoute>
        }
        />
        {/* <Route path="/*" element={<DashboardRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
