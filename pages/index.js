import Link from 'next/link';
import Head from 'next/head';
import ImageBig from '../src/components/images';
import Layout from '../components/layout';
import NavigatePage from '@/components/navigation';

const testPages = ["home", "FAQs", "rsvp", "schedule", "guestList", "travel", "account", "admin"];

export function NavigationTabs(tabsArray) {
    const navigationArray = testPages.map((item) => {
        return <NavigatePage pageName={item}></NavigatePage>
    })
    return (
        navigationArray
    );
}

export default function HomePage() {
    return (
        <div>
            <Layout>
                <Head>
                    <title>title here</title>
                </Head>
                <NavigationTabs tabsArray={testPages}></NavigationTabs>
                <br />
                <ImageBig></ImageBig>
            </Layout>
        </div>
    );
}