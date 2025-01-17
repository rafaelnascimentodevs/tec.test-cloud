import { Routes, Route } from 'react-router-dom';
import { Feed } from './pages/Feed';
import { CreateEnt } from './pages/CreateEnt';
import { UpdateEnt } from './pages/UpdateEnt';
import { OneEnt } from './pages/OneEnt';


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/createEntitys" element={<CreateEnt />} />
            <Route path="/oneEntity/:id" element={<OneEnt />} />
            <Route path="/updateEntitys/:id" element={<UpdateEnt />} />
        </Routes>
    );
}