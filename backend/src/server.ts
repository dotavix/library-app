import { app } from "./app";
import { connectMongo } from "./database/mongoose";

async function bootstrap() {
  await connectMongo();
  const PORT = Number(process.env.PORT || 3000);
  app.listen(PORT, () => {
    console.log("Server is runnning");
  });
}

bootstrap().catch((error) => {
  process.exit(1);
});
