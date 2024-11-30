import './App.css'
import { Routes, Route } from 'react-router'
import MainLayout from './components/MainLayout'
import PageNotFound from './screens/PageNotFound'
import ReadMessageScreen from './screens/ReadMessageScreen'
import ServiceScreen from './screens/ServiceScreen'
import BlogScreen from './screens/BlogScreen'
import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'
import ContactScreen from './screens/ContactScreen'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/service' element={<ServiceScreen />} />
        <Route path='/blog' element={<BlogScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/sms' element={<ReadMessageScreen />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
