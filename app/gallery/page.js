import '../globals.css';
import Image from 'next/image';
import localFont from 'next/font/local'
import { promises as fs } from 'fs';
import GalleryGrid from '../../components/gallery_grid';
import GalleryImg from '../../components/gallery_img';

// Import Local Font
const myFont = localFont({
    src: '../../font/cmu.typewriter-text-regular.ttf',
})

const gallery_header_text_style = 'tower-gallery-header-text ' + myFont.className

// Load gallery group data from json
    const file = await fs.readFile(process.cwd() + '/data/gallery_groups.json', 'utf8');
    const data = JSON.parse(file);
    const group_data = []

    // Convert from object of objects to array of objects to allow for .map() usage )
    for (let [, value] of Object.entries(data)) {
        group_data.push(value)
    }

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
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}
