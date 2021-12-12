import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect } from 'react'

const qrCodeRegionId = 'html5qr-code-full-region'

const QrScanner = ({fps, qrbox, aspectRatio, disableFlip, verbose, qrCodeSuccessCallback, qrCodeErrorCallback}) =>{

    useEffect(()=>{
        createScan()
    },[])

    const createScan = () =>{
        var config = {}
        if (fps) {
            config.fps =fps;
        }
        if (qrbox) {
        config.qrbox = qrbox;
        }
        if (aspectRatio) {
        config.aspectRatio = aspectRatio;
        }
        if (disableFlip !== undefined) {
        config.disableFlip = disableFlip;
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrCodeRegionId, config, verbose===true)
        html5QrcodeScanner.render(qrCodeSuccessCallback,qrCodeErrorCallback)
    }
    return(
        <div id={qrCodeRegionId}/>
    )

}

export default QrScanner