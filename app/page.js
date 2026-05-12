import './globals.css'; 
import Image from 'next/image';


export default function Home() {
   return (
        <div className='h-500'>
          <div className='container-home'>
            <div className='tower-home'>
              <div className='tower-home-shadow'>
              </div>
              <div className='tower-home-content-base'>
                <div className='home-content'>
                  <div className='home-content-top'></div>
                  {/* <div className='home-content-top'>
                    <p>test</p><p>test</p><p>test</p>
                  </div> */}
                </div>
                
                <Image
                        src="/pfp.png"
                        width={1920}
                        height={1080}
                        alt="Picture of the author"
                        className="pfp-home"
                        loading="eager"
                ></Image>
              </div>
            </div>

          </div>
        </div>
    );
}
