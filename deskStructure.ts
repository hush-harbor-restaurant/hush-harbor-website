import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Events Image")
        .child(
          S.document().schemaType("eventsImage").documentId("eventsImage")
        ),
    ]);
