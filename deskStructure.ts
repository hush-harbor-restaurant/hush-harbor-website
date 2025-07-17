import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) => {
  // Filter out the 'eventsImage' type from the default list
  const defaultItems = S.documentTypeListItems().filter(
    (item) => !["eventsImage"].includes(item.getId()!),
  );

  return S.list()
    .title("Content")
    .items([
      // Singleton item: Events Image
      S.listItem()
        .title("Events Image")
        .child(
          S.document().schemaType("eventsImage").documentId("eventsImage"),
        ),
      // All other document types
      ...defaultItems,
    ]);
};
