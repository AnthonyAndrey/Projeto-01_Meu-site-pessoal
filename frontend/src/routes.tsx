import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Loading } from './pages/Loading';
import Menu from './pages/Menu';
import { NotFound } from './pages/NotFound';
import { Project } from './pages/Project';
import style from "./App.module.scss"
import classNames from 'classnames';

import { connect } from "react-redux";
import { ApplicationState } from "./store";
import { ThemeState } from "./store/ducks/theme/types";

interface StateProps {// pode ser que seja o state que ta resetando o menu
    theme: ThemeState
}


function AppRouter({ theme }: StateProps) {
    return (
        <main className={classNames({
            [style.app]:true,
            [style['app--light']]:theme.selectedTheme === "light"
        })}>
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


const mapStateToProps = (state: ApplicationState) => ({
    theme: state.theme
})

export default connect(mapStateToProps)(AppRouter)