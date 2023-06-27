import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Paquetes from './components/Paquetes';

export default function Home() {
  const router = useRouter();
  const {status} = router.query;

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      router.push('/administrador');
    } else {
      router.push('/');
    }
  }, []);

  return (
    <>
      <section id="intro">
        <div className="intro-container wow fadeIn">
          <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'350px'}} />
          <h2 className="mt-3 mb-1 pb-0 text-white font-weight-bold">{status === 'success' ? '¡Se ha registrado con éxito!' : '29 y 30 de julio, 2023'}</h2>
          <p className="font-weight-bold m-0 text-white">CONSTANCIA CON VALOR CURRICULAR DE 40 HORAS</p>
          {status === 'success' ? <p className="mb-1 pt-0">¡BIENVENIDO!</p> : <p className="mb-1 pt-0 dirigido">Dirigido a Médicos Generales, Médicos internistas, Médicos Familiares, Geriatras, Gerontólogos<br/>Nutriólogos, Estudiantes, Personal de Enfermería, Cuidadores y especialidades afines</p>}
          {/* 
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          */}
          <div className="d-flex">
          {status === 'success' ? 
            <Link href="/registro"><a className="about-btn" style={{'background':'#3b6b00'}}>INGRESAR A SU PANEL</a></Link>
            :
            <Link href="#buy-tickets"><a className="about-btn scrollto">REGISTRO AL CONGRESO</a></Link>
          }
          </div>
        </div>
      </section>
      <Paquetes />
      <style jsx>{`
        .intro-container h1 {
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}
