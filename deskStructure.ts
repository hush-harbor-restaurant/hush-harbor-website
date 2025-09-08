import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) => {
  const defaultItems = S.documentTypeListItems().filter(
    (item) =>
      ![
        "eventsImage",
        "infoSection",
        "eventSpace",
        "eventPage",
        "signUpSection",
        "infoImage",
        "navbarSettings",
      ].includes(item.getId()!),
  );

  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Event Page")
        .child(
          S.list()
            .title("Event Page")
            .items([
              S.listItem()
                .title("Page Settings")
                .child(
                  S.document().schemaType("eventPage").documentId("eventPage"),
                ),
              S.listItem()
                .title("Event Spaces")
                .child(S.documentTypeList("eventSpace").title("Event Spaces")),
            ]),
        ),

      // Other content
      S.listItem()
        .title("Info Section")
        .child(
          S.document().schemaType("infoSection").documentId("infoSection"),
        ),
      S.listItem()
        .title("Sign Up Section")
        .child(
          S.document().schemaType("signUpSection").documentId("signUpSection"),
        ),
      S.listItem()
        .title("Info Section Image")
        .child(S.document().schemaType("infoImage").documentId("infoImage")),
      ...defaultItems,
      S.listItem()
        .title("Navbar Settings")
        .child(
          S.document()
            .schemaType("navbarSettings")
            .documentId("navbarSettings"),
        ),
    ]);
};
