import Image from 'next/image';
import { promises as fs } from 'fs';
import localFont from 'next/font/local'
import GalleryGrid from '../../../components/gallery_grid'



// Import Local Font
const myFont = localFont({
    src: '../../../font/cmu.typewriter-text-regular.ttf',
})

export default async function Page({ params }) {

    // Combine global.css style with local font import
    const gallery_header_text_style = 'tower-gallery-header-text ' + myFont.className

    // Get slug of current page
    const { slug } = await params

    // Load gallery group data from json
    const file = await fs.readFile(process.cwd() + '/data/gallery_' + slug + ".json", 'utf8');
    const data = JSON.parse(file);
    const group_data = []

    // Convert from object of objects to array of objects to allow for .map() usage )
    for (let [, value] of Object.entries(data)) {
        group_data.push(value)
    }



    return <div className='h-300'>
        <div className='container-gallery'>
            <div className='tower-gallery'>
                {/* Shadow */}
                <div className='tower-gallery-shadow'></div>

                {/* Content Container */}
                <div className='tower-gallery-content-base'>

                    {/* Header */}
                    <div className='tower-gallery-header'>
                        <p className={gallery_header_text_style}>=== {slug.replace("_", " ")} ===</p>
                    </div>

                    <div className='tower-gallery-grid' >
                        <GalleryGrid data={group_data}></GalleryGrid>
                    </div>

                </div>
            </div>
        </div>
    </div>
}