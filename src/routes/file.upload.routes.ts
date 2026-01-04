import {Router} from "express";
import {uploadProductImage} from "../util/file.upload.util";
import {handleUpload} from "../controllers/file.upload.controller";
import {checkHealth} from "../controllers/admin.controller";

const fileUploadRoutes: Router = Router();

fileUploadRoutes.post("/book", uploadProductImage.single("photo"), handleUpload);
fileUploadRoutes.get("/user", checkHealth );

export default fileUploadRoutes;