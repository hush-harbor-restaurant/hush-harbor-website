// src/sanity/deskStructure.ts
import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) => {
  const defaultItems = S.documentTypeListItems().filter(
    (item) => !["eventsImage", "infoSection"].includes(item.getId()!),
  );

  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Events Image")
        .child(
          S.document().schemaType("eventsImage").documentId("eventsImage"),
        ),
      S.listItem()
        .title("Info Section")
        .child(
          S.document().schemaType("infoSection").documentId("infoSection"),
        ),
      ...defaultItems,
    ]);
};
