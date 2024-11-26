import { MainPage } from '@/pages/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Root() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    </Router>
  )
}
  
export default Root;