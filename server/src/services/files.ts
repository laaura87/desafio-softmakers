import fs from "fs";
import path from "path";

export function deleteFile(image: string) {
  try {
    fs.unlinkSync(path.resolve(__dirname, "..", "uploads", image));
  } catch (error) {
    throw new Error("Cannot delete file");
  }
}
