import Image from 'next/image';

export default function ImageBig() {
    return (
        <Image
            src="/cat_2_colors.jpeg"
            height={1000}
            width={1000}
        />
    );
}

export function ImageSmall() {
    return (
        <Image
            src="/cat_2_colors.jpeg"
            height={100}
            width={100}
        />
    );
}

export function ImageWithCaption(imageSize, caption) {
    imageType = null;
    switch (imageSize) {
        case "small":
            imageType = <ImageSmall />
        case "big":
            imageType = <ImageBig />
    }
    return (
        <>
            {imageType}
            <p>{caption}</p>
        </>
    )
}