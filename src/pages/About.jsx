import React from 'react';
import {storageRef} from '../firebase/firebase.utils';


const About = () => {
    const upload = () => {
        const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
        const byteRef1 = storageRef.child('base/byte/image')
        const byteRef2 = storageRef.child('base/byte/audio')
        byteRef1.put(bytes).then((snapshot) => {
            console.log('Uploaded an array!');
        });
        byteRef2.put(bytes).then((snapshot) => {
            console.log('Uploaded an object!');
        });
    }
    return (
        <div>
            <button onClick={upload}>upload</button>
        </div>
    )
}

export default About;