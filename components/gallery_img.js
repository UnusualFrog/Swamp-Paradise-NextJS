import Image from 'next/image';
import Link from 'next/link'
import localFont from 'next/font/local'
// Import Local Font
const myFont = localFont({
    src: '../font/cmu.typewriter-text-regular.ttf',
})

const gallery_title_text_style = 'tower-gallery-grid-title ' + myFont.className
const gallery_text_style = 'tower-gallery-grid-group-text ' + myFont.className

export default function GalleryImg({ img_data, is_group }) {
    let pathName = img_data.name.toLowerCase().replace(" ", "_")

    const href = "/gallery/" + pathName

    if (is_group) {
        return (
            <Link href={href} key={img_data.ID} style={{display: 'contents'}}>
                <div className='tower-gallery-grid-group group'>
                    {img_data.name != "" && <p className={gallery_title_text_style}>{img_data.name}</p>}
                    <Image
                        src={img_data.src}
                        width={350}
                        height={350}
                        alt={img_data.desc}
                        className='tower-gallery-grid-img'
                        loading='eager'
                        unoptimized='true'
                    ></Image>
                    {img_data.desc != "" && <div className='tower-gallery-grid-group-text-container hidden group-hover:block'>
                        <p className={gallery_text_style}>{img_data.desc}</p>
                    </div>}



                </div>
            </Link>
        )
    } else {
        return (
            <Link href={img_data.src} key={img_data.ID} style={{display: 'contents'}} target="_blank">
                <div className='tower-gallery-grid-group group'>
                    {img_data.name != "" && <p className={gallery_title_text_style}>{img_data.name}</p>}
                    <Image
                        src={img_data.src}
                        width={350}
                        height={350}
                        alt={img_data.desc}
                        className='tower-gallery-grid-img'
                        loading='eager'
                        unoptimized='true'
                    ></Image>
                    {img_data.desc != "" && <div className='tower-gallery-grid-group-text-container hidden group-hover:block'>
                        <p className={gallery_text_style}>{img_data.desc}</p>
                    </div>}



                </div>
            </Link>
        )
    }
}