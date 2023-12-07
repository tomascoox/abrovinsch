'use client'

import Image from 'next/image'
import styles from './Home.module.css'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        // Set a CSS variable with the actual viewport height
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    return (
        <main className="flex h-screen w-full flex-col items-center justify-center p-4 bg-white" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
            {/* Logo container */}
            <div className="flex h-full w-full items-center justify-center">
                <div className={styles.logo + " w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"}>
                    <Image
                        src="/abrovinsch-logotype-color.svg" // Replace with your logo path
                        alt="Abrovinsch Logo"
                        layout="responsive"
                        width={500} // Set to the natural width of your image
                        height={100} // Set to the natural height of your image
                        priority
                    />
                </div>
            </div>
        </main>
    )
}