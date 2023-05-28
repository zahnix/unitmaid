import imageURL from "@sanity/image-url";

export const imgURL = (source: any) => {
  return imageURL({
    projectId: "ikgxd8km",
    dataset: "unitmaid",
  }).image(source);
};
