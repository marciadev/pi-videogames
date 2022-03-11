import React, { useState }from "react";
import picSoundOn from "../resources/images/sound_on.png"
import picSoundOff from "../resources/images/sound_off.png"
import { useEffect } from "react";
import styles from "../styles/Home.module.css"

export default function Sound(){

    const audio = new Audio('https://vgmsite.com/soundtracks/super-mario-bros/khbnvkqp/01%20-%20Super%20Mario%20Bros.mp3');

    const [sound, setSound] = useState(false)

    useEffect(() => {
        if(sound) {
          audio.play();
        }

        return () => {
          audio.pause()
        }   
    }, [sound]);
  
    return (
        <div>
        {sound ? <button onClick={()=>setSound(false)} className={styles.buttonMusic}><img src={picSoundOn} alt="sound on" width="40px" heigth="40px" /></button>: <button onClick={()=>setSound(true)} className={styles.buttonMusic}><img src={picSoundOff} alt="sound off" width="40px" heigth="40px" /></button>}
        </div>
    )
}