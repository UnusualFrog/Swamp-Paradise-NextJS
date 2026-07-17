import '../globals.css'; 
import Image from 'next/image';
import AudioPlayer from '../../components/audio_player'


export default function Home() {
   return (
        <div className='h-1000'>
            <p>Projects</p>
            <AudioPlayer></AudioPlayer>
        </div>
    );
}
