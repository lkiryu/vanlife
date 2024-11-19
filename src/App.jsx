import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Vans from './pages/Vans/Vans'
import VanDetails from './pages/VanDetails/VanDetails'
import HostLayout from './components/HostLayout/HostLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Income from './pages/Income/Income'
import HostVans from './pages/HostVans/HostVans'
import HostVanDetails from './pages/HostVanDetails/HostVanDetails'
import HostVanInfo from './pages/HostVanInfo/HostVanInfo'
import HostVanPricing from './pages/HostVanPricing/HostVanPricing'
import HostVanPhotos from './pages/HostVanPhotos/HostVanPhotos'
import Reviews from './pages/Reviews/Reviews'
import NotFound from './pages/NotFound/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
