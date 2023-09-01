import Layout from "@/components/layout";
import NavigatePage from "@/components/navigation";


function addRSVP(names, user_email) {
    //  @params
    //  names - names[0] = first, names[1] = last
    //TODO
    //  parse email(s) - maybe only gmail for now?
    //  create unique user id
    //  add person to invite list

    //  add some ui notification for add
    
}

function editRSVP(user_id) {
    //TODO - update user details
}

function deleteRSVP(user_id) {
    //TODO remove rsvp
    //  remove from list invite list, attendee, tables

    //  add some ui notification person was removed to admin
}

export default function RsvpPage() {
    return (
        <Layout>
            <p>manage page here!</p>
            <NavigatePage pageName="home"></NavigatePage>
        </Layout>
    );
}