import './globals.css';
import Image from 'next/image';
import Link from 'next/link'
import localFont from 'next/font/local'

// Import Local Font
const myFont = localFont({
  src: '../font/cmu.typewriter-text-regular.ttf',
})

const bio_text_style = 'bio-text  ' + myFont.className
const bio_header_style = 'bio-header  ' + myFont.className
const pronoun_btn_style = 'pronoun-button-home ' + myFont.className
const bio_link_text_style = 'bio-link-txt ' + myFont.className


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
                <p className={bio_header_style}>======LINKS======</p>

                <Link href="https://unusualfrog.itch.io/">
                  <Image
                    src="https://static.itch.io/images/logo-black-new.svg"
                    width={400}
                    height={400}
                    alt="Itchio.io Logo"
                    className="bio-links-img"
                    loading="eager"
                  ></Image>
                  <p>---------------------------------------------------------------------</p>
                  <p className={bio_link_text_style}>My games! (Playabled in browser)</p>
                </Link>

                <Link href="https://www.youtube.com/@unusualfrog779">
                  <Image
                    src="/logo_yt_bk.png"
                    width={400}
                    height={400}
                    alt="Youtube Logo"
                    className="bio-links-img"
                    loading="eager"
                  ></Image>
                  <p>---------------------------------------------------------------------</p>
                  <p className={bio_link_text_style}>Various art projects and shitposts</p>
                </Link>

              </div>

            </div>

            <div className='updates-base'>
              <div className='updates-content'>
                <p className={bio_header_style}>===============SITE UPDATES===============</p>
                <ul className='updates-list'>
                  <li className={bio_text_style}>2026/07/16 - Tag system fully functional</li>
                </ul>
              </div>
            </div>



          </div>

        </div>

      </div>
    </div>
  );
}
