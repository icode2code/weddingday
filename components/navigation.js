import Link from 'next/link';

export default function NavigatePage({ pageName }) {
    //  add authentication check via RSVP for page before navigating to endpoints
    const hrefPath = () => {
        switch (pageName) {
            case "FAQs":
                return "FAQs";
            case "rsvp":
                return "rsvp";
            case "schedule":
                return "schedule";
            case "guestList":
                return "guestList";
            case "thingsToDo":
                return "thingsToDo";
            case "travel":
                return "travel";
            case "admin":
                //  TODO add admin authentication
                return "admin";
            //  homepage
            case "home":
            case "/":
                return "/";
                //  TODO    add modular page exist check
            case "test":
                return "test";
            default:
                const test_obj = {
                    pathname: pageName,
                    // query: {
                    //     test: 
                    // }
                }
                return test_obj;
        }
    }
    return (
        //  if page is empty/doesn't exist, take user to homepage

        //  TODO generate key for each page, use something random and unique to each user?
        <Link href={hrefPath()}>
            <button>
                
                {pageName == "" ? "/" : pageName}
                </button>
        </Link>
    );
}

//  TODO  set current page state
    //  after creation of page, increase by 1
    //  maybe add a page limit for future development?
export function currentPages(){
    const [currentPagesState, setCurrentPages] = 0;
}

//  TODO creates page and appends to list of currentPages
export function createPage(){

}

//  TODO saves created page
    //  saves info to database via some server?
    //  maybe have a preview?
export function savePage(){

}

//  opens up page to be edited by user
export function editPage(){

}