import { PORT } from "./config/envs";
import server from "./server";

server.listen(PORT, () => {
    console.log("Server is running on port 3000");
});