"use client";

import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const onClick = async () => {
        // try {
        //     const response = await fetch('',
        //         {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: {
        //                 Email: email,
        //                 Subject: subject,
        //                 Body: body
        //             }
        //         }
        //     );
        // } catch (e) {
        //     console.log(e);
        // }
    }
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center px-8 max-w-screen-xl mx-auto">
            <h2 className="absolute top-6 left-0 text-3xl font-semibold tracking-widest">CONTACT</h2>
            <form className="flex flex-col gap-2 w-1/2 text-black h-96">
                <div className="text-white">Email:</div>
                <input className="bg-white rounded-lg p-1" onChange={(e) => setEmail(e.target.value)} value={email} />
                <div className="text-white">Subject:</div>
                <input type="subject" className="bg-white rounded-lg p-1" onChange={(e) => setSubject(e.target.value)} value={subject} />
                <div className="text-white">Body:</div>
                <textarea className="bg-white rounded-lg flex-grow p-1" onChange={(e) => setBody(e.target.value)} value={body} />
                <button className="mt-2 bg-white rounded-lg self-start px-4 py-2">Send</button>
            </form>
        </div>
    );
}