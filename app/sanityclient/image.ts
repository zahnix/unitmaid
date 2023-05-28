import imageURL from "@sanity/image-url";

export const imgURL = (source: any) => {
  return imageURL({
    projectId: "unitmaid",
    dataset: "unitmaid",
  }).image(source);
};
