import './globals.css';
import Image from 'next/image';
import Link from 'next/link'
import localFont from 'next/font/local'
import Blinky from '../components/blinky'

// Import Local Font
const myFont = localFont({
  src: '../font/cmu.typewriter-text-regular.ttf',
})

// Data for populating site update list
const siteUpdates = [
  {
    date: "2026/07/16",
    text: "Tag system fully functional"
  },
  {
    date: "2026/07/17",
    text: "Blinkies Added; Home layout updated"
  }
]

// combine CSS classes with custom font
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

              <div className='bio-left-col'>

                {/* BIO DESCRIPTION & PFP */}
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
                      Welcome to my Site! My name is Julia. This site is my creative outlet. I am a programmer and I like to dabble in digital art & game dev. Checkout my blog for thoughts on birds, and other less important things.
                    </p>
                  </div>


                </div>

                {/* BLINKIES */}
                <div className='bio-blinkies-container'>
                  <p className={bio_header_style}>===========BLINKIES===========</p>
                  <div className='bio-blinkies-content'>
                    <Blinky
                      imgPath="/blinkies/anything_but_chrome.gif"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/annoying_dog.webp"
                      audioPath="/mp3/toby_fox_dog.mp3"
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/autism.gif"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/axolotl.gif"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/boat_o_cross.png"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/city_stars.gif"
                      // audioPath=""
                      width={35}
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/da_blinkie.gif"
                      audioPath="/mp3/da_vinky.mp3"
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/deltarune_dance.webp"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/doom_hud.gif"
                      audioPath="/mp3/doom_shotgun.mp3"
                      width={35}
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/dvd_bounce.gif"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/dvd_slot.gif"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/eat_pant.png"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/eddsworld.gif"
                      audioPath="/mp3/eddsworld.mp3"
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/ghastly_rainbow.gif"
                      audioPath="/mp3/ghastly_cry.mp3"
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/gimp_user.jpg"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/got_html.jpg"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/indica_girlie.gif"
                      // audioPath=""
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/keroppi.gif"
                      // audioPath="/mp3/"
                    ></Blinky>
                    <Blinky
                      imgPath={"/blinkies/jerma.gif"}
                      audioPath={"/mp3/teacher_jerma.mp3"}
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/bad_web_design.gif"
                      // audioPath="/mp3/"
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/i_block_ads.gif"
                      // audioPath="/mp3/"
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/i_heart_dolphins.gif"
                      // audioPath="/mp3/"
                    ></Blinky>
                    <Blinky
                      imgPath="/blinkies/i_saw_the_bodies.gif"
                      // audioPath="/mp3/"
                    ></Blinky>
                  </div>
                </div>

              </div>

              <div className='bio-right-col'>

                {/* LINKS */}
                <div className='bio-links'>
                  <p className={bio_header_style}>===========LINKS===========</p>

                  <Link href="https://unusualfrog.itch.io/">
                    <Image
                      src="https://static.itch.io/images/logo-black-new.svg"
                      width={400}
                      height={400}
                      alt="Itchio.io Logo"
                      className="bio-links-img"
                      loading="eager"
                    ></Image>
                    <p className='text-center'>---------------------------------------------------------------------</p>
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
                    <p className='text-center'>---------------------------------------------------------------------</p>
                    <p className={bio_link_text_style}>Various art projects and shitposts</p>
                  </Link>

                </div>

                {/* SITE UPDATES */}
                <div className='updates-base'>
                  <div className='updates-content'>
                    <p className={bio_header_style}>==========UPDATES==========</p>
                    <ul className='updates-list'>
                      {siteUpdates.reverse().map((x, i) => <li key={i} className={bio_text_style}>{x.date} - {x.text}</li>)}
                    </ul>
                  </div>
                </div>
              </div>


            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
