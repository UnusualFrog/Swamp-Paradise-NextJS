import './globals.css';
import Image from 'next/image';
import Link from 'next/link'
import localFont from 'next/font/local'

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
                    <Image
                      src="/blinkies/anything_but_chrome.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/annoying_dog.webp"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/autism.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-30"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/axolotl.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/boat_o_cross.png"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-30"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/city_stars.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-35"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/da_blinkie.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-25"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/deltarune_dance.webp"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-25"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/doom_hud.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-50"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/dvd_bounce.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-30"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/dvd_slot.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-30"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/eat_pant.png"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-20"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/eddsworld.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-30"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/ghastly_rainbow.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-20"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/gimp_user.jpg"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-20"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/got_html.jpg"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-20"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/indica_girlie.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-30"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/jerma.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-25"
                      loading="eager"
                    ></Image>
                    <Image
                      src="/blinkies/keroppi.gif"
                      width={400}
                      height={400}
                      alt="Blinky"
                      className="blinky-img-flex w-25"
                      loading="eager"
                    ></Image>
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
