import fs from "fs";
import path from "path";

const assetsDirectory = path.join(process.cwd(), "public/assets");

export const getImageLinks = () => {
  try {
    const files = fs.readdirSync(assetsDirectory);

    return files.map((file, index) => ({
      id: index + 1,
      url: `/assets/${file}`, // Assuming the images are directly in public/assets
    }));
  } catch (error) {
    console.error("Error reading image files:", error);
    return [];
  }
};
