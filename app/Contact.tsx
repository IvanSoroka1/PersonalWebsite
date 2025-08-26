"use client";

import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorFields, setErrorFields] = useState<{
        email: string | null;
        subject: string | null;
        message: string | null;
        submit?: string | null;
    }>({
        email: null,
        subject: null,
        message: null,
        submit: null,
    });


    const onClick = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(null);

        const errors = {
            email: email === '' ? 'Email cannot be empty.' :
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Invalid email format.' : null,
            subject: subject === '' ? 'Subject cannot be empty.' : null,
            message: message === '' ? 'Body cannot be empty.' : null,
        };

        setErrorFields(errors);

        if (errors.email || errors.subject || errors.message)
            return;

        try {
            const response = await fetch('https://y6xxonyz5lqli74ajbupgu6rm40vzvyt.lambda-url.us-east-2.on.aws/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        subject: subject,
                        message: message
                    }),
                }
            );
            if (!response.ok) {
                throw (response.statusText);
            }
            setSuccessMessage("Message successfully sent!");
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
            // setEmail('');
            // setSubject('');
            // setMessage('');
            // setErrorFields({ email: null, subject: null, message: null, submit: null });
        } catch (e) {
            console.log(e);
            setErrorFields(prev => ({ ...prev, submit: 'Failed to send message. Please try again later.' }));
        }
    }
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center px-8 max-w-screen-xl mx-auto">
            <h2 className="absolute top-6 left-0 text-3xl font-semibold tracking-widest">CONTACT</h2>
            <form onSubmit={onClick} className="flex flex-col gap-2 w-1/2 text-black h-96">
                <div className="text-white">Email:</div>
                <input className="bg-white rounded-lg p-1" onChange={(e) => setEmail(e.target.value)} value={email} />
                <div className="text-white">Subject:</div>
                <input type="text" className="bg-white rounded-lg p-1" onChange={(e) => setSubject(e.target.value)} value={subject} />
                <div className="text-white">Body:</div>
                <textarea className="bg-white rounded-lg flex-grow p-1" onChange={(e) => setMessage(e.target.value)} value={message} />
                <button className="mt-2 bg-white rounded-lg self-start px-4 py-2">Send</button>
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                {errorFields.email && <p className="text-red-500">{errorFields.email}</p>}
                {errorFields.subject && <p className="text-red-500">{errorFields.subject}</p>}
                {errorFields.message && <p className="text-red-500">{errorFields.message}</p>}
                {errorFields.submit && <p className="text-red-500">{errorFields.submit}</p>}

            </form>
        </div>
    );
}