// src/sanity/deskStructure.ts
import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) => {
  const defaultItems = S.documentTypeListItems().filter(
    (item) => !["eventsImage", "infoText"].includes(item.getId()!),
  );

  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Info Text")
        .child(S.document().schemaType("infoText").documentId("infoText")),
      S.listItem()
        .title("Events Image")
        .child(
          S.document().schemaType("eventsImage").documentId("eventsImage"),
        ),
      ...defaultItems,
    ]);
};
