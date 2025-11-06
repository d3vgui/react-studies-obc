import { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootLayout(){
    return(
        <Fragment>
            <Header/>
            <main>
                <p>Esse é o layout principal. Abaixo está o conteúdo dinâmico de cada rota filha.</p>
                <hr />
                <Outlet />
            </main>
            <footer>
                <p>Feito com Router DOM</p>
            </footer>
        </Fragment>
    )
}

export default RootLayout