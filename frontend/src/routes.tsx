import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Loading } from './pages/Loading';
import { Menu } from './pages/Menu';
import { NotFound } from './pages/NotFound';
import { Project } from './pages/Project';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<Loading />}>
                        <Route path='/' element={<Menu />} >
                            <Route index element={<Home />} />
                            <Route path='projetos' element={<Project />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}