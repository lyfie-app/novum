import { Fragment, type Node as PMNode } from "@tiptap/pm/model";
import type { EditorInstance } from "../components";

// --- TypeScript augmentation for markdown storage ---
declare module "@tiptap/react" {
  interface Storage {
    markdown: {
      serializer: { serialize: (doc: any) => string };
    };
  }
}

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (_e) {
    return false;
  }
}

export function getUrlFromString(str: string) {
  if (isValidUrl(str)) return str;
  try {
    if (str.includes(".") && !str.includes(" ")) {
      return new URL(`https://${str}`).toString();
    }
  } catch (_e) {
    return null;
  }
}

/**
 * Get the text before a given position in markdown format
 */
export const getPrevText = (editor: EditorInstance, position: number) => {
  const nodes: PMNode[] = []; // explicitly type the array

  editor.state.doc.forEach((node, pos) => {
    if (pos >= position) return false; // stop iteration
    nodes.push(node);
    return true;
  });

  const fragment = Fragment.fromArray(nodes);
  const doc = editor.state.doc.type.createAndFill(undefined, fragment);

  return editor.storage.markdown?.serializer.serialize(doc) ?? "";
};

/**
 * Get all content from the editor in markdown format
 */
export const getAllContent = (editor: EditorInstance) => {
  const doc = editor.state.doc;

  return editor.storage.markdown?.serializer.serialize(doc) ?? "";
};