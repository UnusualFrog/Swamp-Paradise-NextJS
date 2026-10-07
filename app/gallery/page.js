import '../globals.css';
import Image from 'next/image';
import localFont from 'next/font/local'
import GalleryGrid from '../../components/gallery_grid';
import GalleryImg from '../../components/gallery_img';

// Import Local Font
const myFont = localFont({
    src: '../../font/cmu.typewriter-text-regular.ttf',
})

const gallery_header_text_style = 'tower-gallery-header-text ' + myFont.className

// Image data
const group_data = [
    {
        "ID": 1,
        "name": "birds",
        "src": "/assets/pfp.png",
        "desc": "This set contains images of birds"
    },
    {
        "ID": 2,
        "name": "art",
        "src": "/assets/pfp.png",
        "desc": "This set contains digital artwork"
    },
    {
        "ID": 2,
        "name": "mushrooms",
        "src": "/assets/pfp.png",
        "desc": "This set contains photos of mushrooms"
    },
    {
        "ID": 2,
        "name": "indescribable",
        "src": "/assets/pfp.png",
        "desc": "This set contains something indescribable"
    },
    {
        "ID": 1,
        "src": "/assets/pfp.png",
        "desc": "This set contains images of birds"
    },
    {
        "ID": 2,
        "src": "/assets/pfp.png",
        "desc": "This set contains digital artwork"
    },
    {
        "ID": 2,
        "src": "/assets/pfp.png",
        "desc": "This set contains photos of mushrooms"
    },
    {
        "ID": 2,
        "src": "/assets/pfp.png",
        "desc": "This set contains something indescribable"
    },
    {
        "ID": 1,
        "src": "/assets/pfp.png",
        "desc": "This set contains images of birds"
    },
    {
        "ID": 2,
        "src": "/assets/pfp.png",
        "desc": "This set contains digital artwork"
    },
    {
        "ID": 2,
        "src": "/assets/pfp.png",
        "desc": "This set contains photos of mushrooms"
    },
    {
        "ID": 2,
        "src": "/assets/pfp.png",
        "desc": "This set contains something indescribable"
    },
]

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
                            <GalleryGrid data={group_data}></GalleryGrid>
                            {/* <Image
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
                            ></Image> */}



                        </div>



                    </div>

                </div>
            </div>


        </div>
    );
}
