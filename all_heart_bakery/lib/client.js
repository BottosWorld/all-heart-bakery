import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'mw8g0beq',
    dataset: 'production',
    apiVersion: '2022-04-23',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN_2
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
