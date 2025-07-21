// src/sanity/deskStructure.ts
import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) => {
  const defaultItems = S.documentTypeListItems().filter(
    (item) =>
      !["eventsImage", "infoSection", "eventSpace"].includes(item.getId()!),
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
        .title("Event Spaces")
        .child(S.documentTypeList("eventSpace").title("Event Spaces")),
      ...defaultItems,
    ]);
};
