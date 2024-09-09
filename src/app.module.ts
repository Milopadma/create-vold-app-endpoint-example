import { Module } from "@nestjs/common";
import { PageController } from "./endpoints/page.controller";
import { HomepageController } from "./endpoints/homepage.controller";
import { WebconfigController } from "./endpoints/webconfig.controller";

@Module({
  imports: [],
  controllers: [PageController, HomepageController, WebconfigController],
  providers: [],
})
export class AppModule {}
