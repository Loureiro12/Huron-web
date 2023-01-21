import { Route, Routes } from 'react-router-dom'
import { CreateClinic } from '../pages/CreateClinic'
import { ListClinics } from '../pages/ListClinics'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/list-clinics" element={<ListClinics />} />
        <Route path="/create-clinic" element={<CreateClinic />} />
      </Route>
    </Routes>
  )
}
