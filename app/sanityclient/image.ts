import imageURL from '@sanity/image-url'

export const imgURL = (source: any) => {
    return imageURL({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    }).image(source);
}