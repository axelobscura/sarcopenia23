import { useContext } from 'react';
import CardCurso from './components/CardCurso';
import MenuAdmin from './components/MenuAdmin';
import Loader from './components/Loader';
import UserContext from '../UserContext';
import { useEntries, useCursos } from '../lib/swr-hooks';

export default function Administrador() {
    //const { entries, isLoading } = useEntries();
    const { usuario } = useContext(UserContext);
    const { cursos, isLoadingCursos } = useCursos();
    if (isLoadingCursos && !cursos) {
        return(
            <Loader/>
        )
    };
    const ofertaCursos = cursos.map(curso => (
        <CardCurso
            id={curso.id}
            imagen={curso.imagen}
            titulo={curso.titulo}
            fecha={curso.fecha}
            link={curso.link}
        />
    ));
    console.log(usuario);
    return (
        <section id="administrador" className="section-bg wow fadeInUp m-0 p-0 mt-4 pt-5">
            <div className="container-fluid">
                <div className="row">
                    <MenuAdmin/>
                    <div className="col-md-9">
                        <h2><i className="fa fa-user-circle-o mr-3" aria-hidden="true"></i>
 Bienvenido a su panel de afiliado {usuario}</h2>
                        <div className="row">
                            {ofertaCursos}
                        </div>
                    </div>
                </div>
            </div>
            <style global jsx>{`
                body {
                background: #04091B;
                }
            `}</style>
        </section>
    )
}