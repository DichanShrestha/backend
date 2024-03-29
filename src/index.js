import dotenv from 'dotenv'
import connectDB from "./db/index.js"
import { app } from './app.js'
// const app = express
// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERROR:", error);
//             throw error;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error);
//     }
// })()
dotenv.config({ path: './.env' });

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server connected at ${process.env.PORT}`);
            app.on("error", (error) => {
                console.log("ERROR:", error);
                throw error;
            });
        })
    })
    .catch(err => {
        console.log("DB connection FAILED: ", err);
    })