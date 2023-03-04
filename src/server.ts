import {Server} from "./Core/Server";
import {JsonMiddleware, TextMiddleware, UrlEncodedMiddleware} from "./Middleware";
import {Auth, File} from "./Routes/API";

const app = new Server();
app.start(3000)

app.route(new Auth());
app.route(new File());
app.middleware(new JsonMiddleware());
app.middleware(new TextMiddleware());
app.middleware(new UrlEncodedMiddleware());



// const app = express();
// accountsRoutes(app);
// mainRoutes(app);
// app.listen("3000");
