import Layout from "@/components/layout";
import NavigatePage from "@/components/navigation";
import { useState } from "react";

var temp_codes = [];
var current_token = null;

function RsvpForm() {
    const [RsvpAnswer, setRsvpAnswer] = useState('');
    const [error, setError] = useState(null);
    const [RsvpStatus, setRsvpStatus] = useState('typing');

    if (RsvpStatus === 'success') {
        return <h1>Rsvp success</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setRsvpStatus('submitting');
        console.log(`status submitting`);
        try {
            //  TODO last worked here
            await submitForm(RsvpAnswer);
            setRsvpStatus('success');
            console.log('success status');
        } catch (err) {
            setRsvpStatus('typing');
            setError(err);
            console.log(`error ${err}`);
        }
    }

    function handleTextareaChange(e) {
        setRsvpAnswer(e.target.value);
    }

    return (
        <>
            <h2>Search Rsvp</h2>
            <p>
                Please enter your Rsvp code below
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={RsvpAnswer}
                    onChange={handleTextareaChange}
                    disabled={RsvpStatus === 'submitting'}>
                </textarea>
                <br />
                <button
                    disabled={RsvpAnswer.length === 0 ||
                        RsvpStatus === 'submitting'
                    }>
                    Submit
                </button>
                {error !== null &&
                    <p>
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}

function submitForm(RsvpAnswer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = RsvpAnswer.toLowerCase() !== '123'
            if (shouldError) {
                reject(new Error(`rsvp not found for [${RsvpAnswer}]`))
            } else {
                resolve();
            }
        }, 1500);
    });
}

function searchRsvp(uniqueCode) {
    //TOOD searches for users first + last name via unique code sent from Rsvp
    return (
        uniqueCode
    );
    //  check access token - set in browser after initial Rsvp search success
    //  redirect to access page(s) for guest

    //  no token - show Rsvp search?
    //  search via api / db
    //  found - success
    //  create access token
    //  not found - failure
    //  redirect to Rsvp home url

}

function foundRsvp() {
    return (
        <>
            code [{uniqueCode}] was found!
        </>
    );
}

function notFoundRsvp() {
    return (
        <>
            code [{uniqueCode}] invalid =/
        </>
    );
}

function checkRsvp(uniqueCode) {
    if (temp_codes.includes(uniqueCode)) {
        foundRsvp();
    } else
        notFoundRsvp();
}

export default function RsvpPage() {
    return (
        <Layout>
            <NavigatePage pageName="home"></NavigatePage>
            <p>Rsvp page here!</p>
            {RsvpForm()}
        </Layout>
    );
}