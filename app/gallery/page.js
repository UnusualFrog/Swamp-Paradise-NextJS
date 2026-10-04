import '../globals.css';
import Image from 'next/image';
import localFont from 'next/font/local'

// Import Local Font
const myFont = localFont({
    src: '../../font/cmu.typewriter-text-regular.ttf',
})

const gallery_header_text_style = 'tower-gallery-header-text ' + myFont.className

export default function Home() {
    return (
        <div className='h-auto'>
            <div className='container-gallery'>
                <div className='tower-gallery'>
                    {/* Shadow */}
                    <div className='tower-gallery-shadow'></div>

                    {/* Content Container */}
                    <div className='tower-gallery-content-base'>

                        {/* Header */}
                        <div className='tower-gallery-header'>
                            <p className={gallery_header_text_style}>=== Gallery ===</p>
                        </div>

                        <div className='tower-gallery-grid' >
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>
                            <Image
                                src="/assets/pfp.png"
                                width={1920}
                                height={1080}
                                alt="Picture of the author"
                                className="tower-gallery-grid-img"
                            ></Image>



                        </div>



                    </div>

                </div>
            </div>


        </div>
    );
}
