import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all routes
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "*",
  });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}

bootstrap().catch((err) => {
  console.error("Error starting the server:", err);
  process.exit(1);
});
