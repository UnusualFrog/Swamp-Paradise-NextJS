import './globals.css'; 
import Image from 'next/image';
import localFont from 'next/font/local'

// Import Local Font
const myFont = localFont({
  src: '../font/cmu.typewriter-text-regular.ttf',
})

const bio_text_style = 'bio-text  ' + myFont.className
const bio_header_style = 'bio-header  ' + myFont.className
const pronoun_btn_style = 'pronoun-button-home ' + myFont.className

export default function Home() {
   return (
        <div className='h-500'>
          <div className='container-home'>
            
            {/* Tower Contents */}
            <div className='tower-home'>

              {/* Shadow */}
              <div className='tower-home-shadow'></div>

              {/* Actual Content */}
              <div className='tower-home-content-base'>

                <div className='bio-base'>

                  <div className='bio-content'>
                    
                    <div className="bio-pfp-col">
                      <Image
                        src="/pfp.png"
                        width={1920}
                        height={1080}
                        alt="Picture of the author"
                        className="pfp-home"
                        loading="eager"
                      ></Image>
                      <button disabled={true} className={pronoun_btn_style}>♀️ - She/Her</button>
                    </div>
                    
                    <div className="bio-text-container">
                      <p className={bio_header_style}>==========BIO==========</p>
                      <p className={bio_text_style}>
                              Welcome to my Site! My name is Julia. This site is my creative outlet. I am a programmer and I like to dabble in digital art & game dev. Checkout my blog for thoughts on birds, frogs, and other less important things.
                      </p>
                    </div>
                    

                  </div>

                  <div className='bio-links'>

                  </div>

                </div>

                <div className='blinkies-base'>

                </div>
                
                
                
              </div>

            </div>

          </div>
        </div>
    );
}
