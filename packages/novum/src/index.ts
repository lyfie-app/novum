// Components
export {
  EditorRoot,
  EditorContent,
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandList,
  EditorCommandItem,
  EditorCommandEmpty,
  useEditor,
} from "./components";

export type { JSONContent } from "@tiptap/core";
export { type Editor as EditorInstance } from "@tiptap/core";

export type { 
  EditorContentProps 
} from "./components";

export * from "./extensions/mathematics";
export * from "./extensions/twitter";

// Extensions
export {
  AIHighlight,
  removeAIHighlight,
  addAIHighlight,
  CodeBlockLowlight,
  HorizontalRule,
  ImageResizer,
  InputRule,
  Placeholder,
  StarterKit,
  TaskItem,
  TaskList,
  Image,
  TiptapUnderline,
  MarkdownExtension,
  TextStyleKit,
  Color,
  HighlightExtension,
  CustomKeymap,
  TiptapLink,
  UpdatedImage,
  Youtube,
  Twitter,
  Mathematics,
  CharacterCount,
  GlobalDragHandle,
  Command,
  renderItems,
  createSuggestionItems,
  handleCommandNavigation,
  type SuggestionItem,
} from "./extensions";

// Plugins
export {
  UploadImagesPlugin,
  type UploadFn,
  type ImageUploadOptions,
  createImageUpload,
  handleImageDrop,
  handleImagePaste,
} from "./plugins";

// Utils
export {
  isValidUrl,
  getUrlFromString,
  getPrevText,
  getAllContent,
} from "./utils";

// Store and Atoms
export { queryAtom, rangeAtom } from "./utils/atoms";
