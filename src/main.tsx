import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '@/Layout.tsx'
import {Projects, Hello, NotFound, About} from '@/Screens/imports'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<Layout/>}>
    <Route index element={<Hello/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='about' element={<About/>} />
    <Route path='*' element={<NotFound/>}/>
  </Route>
))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
