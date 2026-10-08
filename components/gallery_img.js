import Image from 'next/image';
import Link from 'next/link'
import localFont from 'next/font/local'
// Import Local Font
const myFont = localFont({
    src: '../font/cmu.typewriter-text-regular.ttf',
})

const gallery_title_text_style = 'tower-gallery-grid-title ' + myFont.className
const gallery_text_style = 'tower-gallery-grid-group-text ' + myFont.className

export default function GalleryImg(data) {
    let pathName = data.img_data.name.toLowerCase().replace(" ", "_")

    const href = "/gallery/" + pathName
    return (
        <Link href={href} key={data.img_data.ID}>
            <div className='tower-gallery-grid-group group'>
                <p className={gallery_title_text_style}>{data.img_data.name}</p>
                <Image
                    src={data.img_data.src}
                    width={350}
                    height={350}
                    alt={data.img_data.desc}
                    className='tower-gallery-grid-img'
                    loading='eager'
                ></Image>
                <div className='tower-gallery-grid-group-text-container hidden group-hover:block'>
                    <p className={gallery_text_style}>{data.img_data.desc}</p>
                </div>



            </div>
        </Link>

    )
}