import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) => {
  // Filter out the 'eventsImage' and 'infoImage' types from the default list
  const defaultItems = S.documentTypeListItems().filter(
    (item) => !["eventsImage", "infoImage"].includes(item.getId()!)
  );

  return S.list()
    .title("Content")
    .items([
      // Singleton item: Events Image
      S.listItem()
        .title("Events Image")
        .child(
          S.document().schemaType("eventsImage").documentId("eventsImage")
        ),

      // Singleton item: Info Image
      S.listItem()
        .title("Info Image")
        .child(S.document().schemaType("infoImage").documentId("infoImage")),

      // All other document types
      ...defaultItems,
    ]);
};
