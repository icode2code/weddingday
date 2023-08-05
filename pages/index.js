import Link from 'next/link';
import Head from 'next/head';
import ImageBig from '../src/components/images';
import Layout from '../components/layout';
import NavigatePage from '@/components/navigation';

const testPages = {
    paths: ["FAQs", "rsvp", "schedule","guestList", "travel", "admin", "home"],
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
                    {/* <button>
                        <NavigatePage pageName={testPages.paths[1]}>{testPages.paths[1]}</NavigatePage>
                    </button>
                    <button>
                        <NavigatePage pageName={testPages.paths[2]}>{testPages.paths[2]}</NavigatePage>
                    </button>
                    <button>
                        <NavigatePage pageName={testPages.paths[3]}>{testPages.paths[3]}</NavigatePage>
                    </button>
                    <button>
                        <NavigatePage pageName={testPages.paths[4]}>{testPages.paths[4]}</NavigatePage>
                    </button>
                    <button>
                        <NavigatePage pageName={testPages.paths[5]}>{testPages.paths[5]}</NavigatePage>
                    </button>
                    <button>
                        <NavigatePage pageName={testPages.paths[6]}>{testPages.paths[6]}</NavigatePage>
                    </button> */}
                </div>
                <ImageBig></ImageBig>
            </Layout>
        </div>
    );
}