import Layout from "@/components/layout";
import NavigatePage from "@/components/navigation";

export default function GuestListPage(){
    return (
        <Layout>
            <p>guestlist page here!</p>
            <NavigatePage pageName="home"></NavigatePage>
        </Layout>
    );
}