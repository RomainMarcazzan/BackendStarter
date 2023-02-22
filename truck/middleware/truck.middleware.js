import admin from "../../utils/firebase.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadImage = upload.single("image");

export const uploadToStorage = async (req, res, next) => {
  try {
    // Get the file from the request object
    const file = req.file;
    console.log("file", file);
    // Create a new Storage bucket using the Firebase Admin SDK
    const bucket = admin.storage().bucket();
    // Create a unique file name for the uploaded file
    const fileName = `${Date.now()}_${file.originalname}`;

    // Create a file object for the uploaded file
    const fileUpload = bucket.file(fileName);

    // Create a write stream for the file object
    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    // Pipe the file data to the write stream
    stream.end(file.buffer);

    // Wait for the write stream to finish
    stream.on("finish", async () => {
      // Get the public URL for the uploaded file
      const imageUrl = await fileUpload.getSignedUrl({
        action: "read",
        expires: "03-09-2491",
      });

      // Add the photo to the request object
      req.imageUrl = imageUrl[0];
      // Move to the next middleware
      next();
    });

    // Handle any errors from the write stream
    stream.on("error", (error) => {
      return res.status(500).json({ message: error.message });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
