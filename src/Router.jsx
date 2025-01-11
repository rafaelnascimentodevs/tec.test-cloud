import { Routes, Route } from 'react-router-dom';
import { Feed } from './pages/Feed';
import { CreateEnt } from './pages/CreateEnt';
import { UpdateEnt } from './pages/UpdateEnt';
import { OneEnt } from './pages/OneEnt';


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/createEntity" element={<CreateEnt />} />
            <Route path="/oneEntity" element={<OneEnt />} />
            <Route path="/updateEntity" element={<UpdateEnt />} />
        </Routes>
    );
}