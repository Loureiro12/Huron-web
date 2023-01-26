import { Route, Routes } from 'react-router-dom'
import { CreateClinic } from '../pages/CreateClinic'
import { ListClinics } from '../pages/ListClinics'
import { MedicalRecord } from '../pages/MedicalRecord'
import { SalesPage } from '../pages/SalesPage'
import { SignIn } from '../pages/SignIn '
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/list-clinics" element={<ListClinics />} />
        <Route path="/create-clinic" element={<CreateClinic />} />
        <Route path="/medical-record" element={<MedicalRecord />} />

        <Route path="/" element={<SalesPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
