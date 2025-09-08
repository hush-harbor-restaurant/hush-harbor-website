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
        "navbarSettings",
      ].includes(item.getId()!),
  );
  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Info Section")
        .child(
          S.document().schemaType("infoSection").documentId("infoSection"),
        ),
      S.listItem()
        .title("Menu Section")
        .child(
          S.list()
            .title("Menu Section")
            .items([
              S.listItem()
                .title("Sections")
                .child(S.documentTypeList("menuSection").title("Sections")),
              S.listItem()
                .title("Items")
                .child(S.documentTypeList("menuItem").title("Items")),
            ]),
        ),
      S.listItem()
        .title("Sign Up Section")
        .child(
          S.document().schemaType("signUpSection").documentId("signUpSection"),
        ),

      S.listItem()
        .title("Events Page")
        .child(
          S.list()
            .title("Events Page")
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
      S.listItem()
        .title("Navbar Settings")
        .child(
          S.document()
            .schemaType("navbarSettings")
            .documentId("navbarSettings"),
        ),
    ]);
};
