import Layout from "@/components/layout";
import NavigatePage from "@/components/navigation";
import { useState } from "react";

var temp_codes = [];
var current_token = null;

function RSVPForm() {
    const [RSVPAnswer, setRSVPAnswer] = useState('');
    const [error, setError] = useState(null);
    const [rsvpStatus, setRSVPStatus] = useState(null);

    if (rsvpStatus === 'success') {
        return <h1>rsvp success</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setRSVPStatus('submitting');
        try {
            //  TODO last worked here
            await submit
        }
    }

    return (
        <>
            <h2>Search RSVP</h2>
            <p>
                Please enter your RSVP code below
            </p>
            <form>
                <textarea
                    value={rsvpAnswer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}>
                </textarea>
                <br />
                <button
                    disabled={RSVPAnswer.length === 0 ||
                        rsvpStatus === 'submitting'}>
                    Submit
                </button>
            </form>
        </>
    );
}

function searchRSVP(uniqueCode) {
    //TOOD searches for users first + last name via unique code sent from RSVP
    return (
        uniqueCode
    );
    //  check access token - set in browser after initial rsvp search success
    //  redirect to access page(s) for guest

    //  no token - show rsvp search?
    //  search via api / db
    //  found - success
    //  create access token
    //  not found - failure
    //  redirect to rsvp home url

}

function foundRSVP() {
    return (
        <>
            code [{uniqueCode}] was found!
        </>
    );
}

function notFoundRSVP() {
    return (
        <>
            code [{uniqueCode}] invalid =/
        </>
    );
}

function checkRSVP(uniqueCode) {
    if (temp_codes.includes(uniqueCode)) {
        foundRSVP();
    } else
        notFoundRSVP();
}

export default function RsvpPage() {
    return (
        <Layout>
            <p>rsvp page here!</p>
            <NavigatePage pageName="home"></NavigatePage>
        </Layout>
    );
}