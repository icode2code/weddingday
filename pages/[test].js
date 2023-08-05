import Layout from "@/components/layout";
import NavigatePage from "@/components/navigation";

import { useRouter } from "next/router";

// GOAL - create modular page for user to create

//  TODO - pageName / path should be readable

export default function ModularPage({pageName}){
    // TODO create a user input field and submit
    //      creates page based on name of field string

    //testing
    const { asPath, pathname} = useRouter();

    return (
        <Layout>
            <p>
                pageName details = [{pageName}]
            </p>
            test navigation
            <br></br>
            asPath [{asPath}] pathname {pathname}
            <br></br>
            <NavigatePage pageName="home"></NavigatePage>
        </Layout>
    );
}