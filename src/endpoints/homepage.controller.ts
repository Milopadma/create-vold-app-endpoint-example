import { Controller, Get, Param } from "@nestjs/common";

@Controller("v1")
export class HomepageController {
  @Get(":clientId/homepage")
  getHomepage(@Param("clientId") clientId: string): Record<string, unknown> {
    const homepageData = {
      components: [
        {
          data: {
            heroProductTitle: "Structured Hydrogen Water",
            title: "Structured Hydrogen Water",
          },
          id: "b5128da9-0697-4d05-a1c1-daad2aac2d3c",
          section: "66a86a36118e3e2550643677",
          sectionId: "HeroProduct",
          title: "HeroProduct",
        },
        {
          data: {
            rightDescriptionContent:
              "OKEARA structured hydrogen water is exceptionally safe, thanks to our non-electrolytic atomic saturation method. The harmless hydrogen seamlessly integrates with your body's natural processes.",
          },
          id: "ad5010bb-7441-46d6-b34c-6cc8e37087fc",
          section: "66a9b9e1118e3e25506a26a8",
          sectionId: "RightDescription",
          title: "RightDescription",
        },
        // ... other components ...
        {
          data: {
            textBackgroundButtonText: "Learn More",
            textBackgroundDetails:
              "We are dedicated to living our best lives, focusing on health and happiness together, and making each day special. ",
            textBackgroundImage: {
              aws_file_url:
                "https://vold-independent.s3.ap-southeast-1.amazonaws.com/",
              client: {
                _id: "66a73e89118e3e25505d1986",
                created_at: "2024-07-29T07:02:33.788Z",
                domain: null,
                featured: false,
                id: "66a73e89118e3e25505d1986",
                last_edited: {
                  at: "2024-07-29T09:25:20.651Z",
                  email: "admin@fleava.com",
                  id: "63e5ac653c4f8cdfac5f31b8",
                  name: "Admin Fleava",
                  role: "master",
                  role_id: null,
                },
                master: false,
                name: "okeara",
                options: {
                  disabled_language: true,
                  disabled_property_menu: true,
                  featured: true,
                  menu_enabled_post: true,
                  v2_editor: false,
                },
                status: "published",
                template: null,
                updated_at: "2024-07-29T09:25:20.653Z",
                websiteName: null,
              },
              created_at: "2024-08-07T05:12:44.361Z",
              description: null,
              filename: {
                big: "big/text-background-image-1png.png",
                blur: "blur/text-background-image-1png.png",
                medium: "medium/text-background-image-1png.png",
                raw: "raw/text-background-image-1png.png",
                webp: "webp/text-background-image-1png.webp",
              },
              folder: {
                client: "66a73e89118e3e25505d1986",
                created_at: "2024-08-07T05:09:32.639Z",
                id: "66b3018c118e3e25509e4430",
                last_edited: {
                  at: "2024-08-07T05:09:32.635Z",
                  email: "admin@fleava.com",
                  id: "63e5ac653c4f8cdfac5f31b8",
                  name: "Admin Fleava",
                  role: "developer",
                  role_id: "66a73e89118e3e25505d1987",
                },
                name: "content images",
                parent: null,
                type: null,
                updated_at: "2024-08-07T05:09:32.639Z",
                uri: "content-images",
              },
              id: "66b3024c118e3e25509e4890",
              is_aws: true,
              last_edited: null,
              original: "text-background-image-1.png",
              path: "content-images/b2c9a250-1bb5-47d3-a14e-fefe99ffba75",
              size: 1088604,
              title: null,
              type: "IMG",
              updated_at: "2024-08-07T05:12:44.361Z",
            },
            textBackgroundLabel: "Our Community",
            textBackgroundTitle: "Welcome to OKEARA Club! ",
          },
          id: "52994c29-8da4-4fb1-8c2c-01c08ac0d87c",
          section: "66acc3f2118e3e25507ef042",
          sectionId: "TextBackground",
          title: "TextBackground",
        },
      ],
      created_at: "2024-07-29T09:13:19.118Z",
      customUrl: {
        en: "",
      },
      data: null,
      description: null,
      featured: null,
      id: "66a75d2f118e3e25505f34a3",
      index: null,
      is_exclude_path: false,
      is_frontpage: false,
      last_edited: {
        at: "2024-08-07T05:12:49.698Z",
        email: "admin@fleava.com",
        id: "63e5ac653c4f8cdfac5f31b8",
        name: "Admin Fleava",
        role: "developer",
        role_id: "66a73e89118e3e25505d1987",
      },
      last_edited_by: {
        _id: "63e5ac653c4f8cdfac5f31b8",
        email: "admin@fleava.com",
        name: "Admin Fleava",
        role: {
          _id: "66a73e89118e3e25505d1987",
          client: "66a73e89118e3e25505d1986",
          created_at: "2024-07-29T07:02:33.392Z",
          disabled_create: [],
          disabled_menu: [],
          is_full_access: true,
          is_ignore_self_permission: false,
          last_edited: null,
          name: "developer",
          permission: [],
          updated_at: "2024-07-29T07:02:33.392Z",
        },
      },
      meta: null,
      pageId: null,
      path: null,
      slug: {
        en: "home",
      },
      status: "published",
      title: {
        en: "Home",
      },
      updated_at: "2024-08-07T05:12:49.724Z",
    };

    return homepageData;
  }
}
