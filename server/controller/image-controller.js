import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:8000";
const conn = mongoose.connection;

let gfs, gridfsBucket;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});
export const uploadImage = (request, response) => {
  if (!request.file) {
    return response.status(404).json({ msg: "file not found" });
  }
  const imageUrl = `${url}/file/${request.file.filename}`;
  return response.status(200).json(imageUrl);
};

export const getImage = async (request, response) => {
  // installing gridfs-stream to get chunks size from the mongodb
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(response);
  } catch (error) {
    return response.status(500).json({ msg: error.message });
  }
};
