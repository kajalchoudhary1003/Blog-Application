//changing the format of image from binary format to image file format
// npm i multer-gridfs-storage is the lib used to store the uploaded files direct to mongo db

import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';
import multer  from 'multer';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb+srv://${username}:${password}@blog-app.gykadl8.mongodb.net/?retryWrites=true&w=majority`,
options: {useNewUrlParser: true},
file: ( request , file) => {
    const match = ["image/png", "image/jpg"];

    if(match.indexOf(file.memeType) === -1){
        return `${Date.now()}-blog-${file.originalname}`;
    }
    return {
        bucketname: 'photos',
        filename: `${Date.now()}-blog-${file.originalname}`
    }
}
})

export default multer({storage});