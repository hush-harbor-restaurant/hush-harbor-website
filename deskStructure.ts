import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) => {
  const defaultItems = S.documentTypeListItems().filter(
    (item) =>
      ![
        "eventsImage",
        "infoSection",
        "eventSpace",
        "eventSpaceBlurb",
        "signUpSection",
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
        .title("Events Blurb")
        .child(
          S.document()
            .schemaType("eventSpaceBlurb")
            .documentId("eventSpaceBlurb"),
        ),
      S.listItem()
        .title("Event Spaces")
        .child(S.documentTypeList("eventSpace").title("Event Spaces")),
      S.listItem() // ✅ Add this block
        .title("Sign Up Section")
        .child(
          S.document().schemaType("signUpSection").documentId("signUpSection"),
        ),
      ...defaultItems,
    ]);
};
