// src/sanity/deskStructure.ts
import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) => {
  const defaultItems = S.documentTypeListItems().filter(
    (item) => !["eventsImage"].includes(item.getId()!),
  );

  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Events Image")
        .child(
          S.document().schemaType("eventsImage").documentId("eventsImage"),
        ),
      ...defaultItems,
    ]);
};
