'use client'

import { useRef } from 'react';
import Image from 'next/image';

export default function Blinky( {imgPath, audioPath, width}) {
  const audioRef = useRef();

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play()
    } else {
      // Throw error
    }
  }

  if (!width) {
    width = 25;
  }
  
  return (
    <div>
      {/* <button onClick={play}>Play</button> */}
      <Image
        src={imgPath}
        width={200}
        height={200}
        alt="Blinky"
        className={"blinky-img-flex w-" + width}
        loading="eager"
        onClick={play}
      ></Image>
      <audio ref={audioRef} src={audioPath} />
    </div>
  )
}