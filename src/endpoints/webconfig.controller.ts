import { Controller, Get, Param } from "@nestjs/common";

@Controller("v1")
export class WebconfigController {
  @Get(":clientId/webconfig")
  getWebconfig(@Param("clientId") clientId: string): Record<string, unknown> {
    const webconfigData: Record<string, unknown> = {
      last_edited: {
        id: "63e5ac653c4f8cdfac5f31b8",
        name: "Admin Fleava",
        email: "admin@fleava.com",
        role: "developer",
        role_id: "668cd748118e3e2550dbcdfa",
        at: "2024-07-10T05:27:35.632Z",
      },
      data: {
        development_website_url: "http://localhost:3000/",
        website_url: "https://elementis.co/",
        editor_url: "",
        dev_mode: false,
        social_media: [
          {
            type: {
              id: "instagram",
              title: "Instagram",
            },
            link: "https://www.instagram.com/elementis.co/",
            title: "Instagram",
          },
        ],
        mailchimp: null,
        mandrill_key: null,
      },
      language: null,
      default_homepage: "669dddc1118e3e25502e2dcb",
      created_at: "2024-07-10T05:27:35.638Z",
      updated_at: "2024-09-04T08:17:34.621Z",
      id: "668e1bc7118e3e2550e484f0",
    };

    return webconfigData;
  }
}
