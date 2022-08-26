import express, { response } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const adress = server.address() as AddressInfo;
        console.log(`Server is running is http://localhost:3003`);
    } else {
        console.error(`Failure upon starting server.`)
    }
})

// app.listen(3003, () => {
//     console.log("Server is running in http://localhost:3003")
// });

export default app