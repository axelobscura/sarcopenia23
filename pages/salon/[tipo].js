import { useRouter } from 'next/router';
import MenuAdminEvento from '../components/MenuAdminEvento';
import ReactPlayer from 'react-player';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default function Salon() {
  const router = useRouter();
  const { tipo } = router.query;
  let elvideo = tipo;
  return (
      <section id="administrador" className="section-bg wow fadeInUp m-0 p-0">
        <div className="container-fluid">
          <div className="row vh-80">
            {/*<MenuAdminEvento />*/}
            <div className="col-md-12">
              <div className="row">
                <div className="cubrenlace"></div>
                <ReactPlayer
                  className='react-player'
                  url={`https://www.youtube.com/watch?v=${elvideo}?rel=0;autoplay=1`}
                  width="100%"
                  height="100%"
                  loop='true'
                  playing='true'
                  controls='true'
                  config={{
                      youtube: {
                        playerVars: { showinfo: 0 }
                      }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <style global jsx>{`
            body {
            background: #04091B;
            }
            .ytp-copylink-title {
              display: none !important;
            }
        `}</style>
      </section>
  )
}