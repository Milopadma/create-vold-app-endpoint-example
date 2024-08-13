import { Module } from "@nestjs/common";
import { PageController } from "./endpoints/page.controller";
import { HomepageController } from "./endpoints/homepage.controller";

@Module({
  imports: [],
  controllers: [PageController, HomepageController],
  providers: [],
})
export class AppModule {}
