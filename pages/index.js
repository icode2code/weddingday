import Link from 'next/link';
import Head from 'next/head';
import ImageBig from '../src/components/images';
import Layout from '../components/layout';
import NavigatePage from '@/components/navigation';

const testPages = {
    paths: ["FAQs", "rsvp", "schedule","guestList", "travel", "account", "admin", "home"],
};

export default function HomePage() {
    return (
        <div>
            <Layout>
                <Head>
                    <title>title here</title>
                </Head>
                <div>
                    <NavigatePage pageName="rsvp"></NavigatePage>
                    <NavigatePage pageName="schedule"></NavigatePage>
                    <NavigatePage pageName="FAQs"></NavigatePage>
                    <NavigatePage pageName="guestList"></NavigatePage>
                    <NavigatePage pageName="schedule"></NavigatePage>
                    <NavigatePage pageName="travel"></NavigatePage>
                    <NavigatePage pageName="manage"></NavigatePage>
                    <NavigatePage pageName="account"></NavigatePage>
                </div>
                <br/>
                <ImageBig></ImageBig>
            </Layout>
        </div>
    );
}