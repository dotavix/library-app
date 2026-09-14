import { app } from "./app";

async function bootstrap() {
  const PORT = Number(process.env.PORT || 3000);
  app.listen(PORT, () => {
    console.log("Server is runnning");
  });
}

bootstrap().catch((error) => {
  process.exit(1);
});
