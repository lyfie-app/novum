// import { isNodeSelection, useCurrentEditor } from "@tiptap/react";
// import { BubbleMenu } from '@tiptap/react/menus';
// import { forwardRef, useEffect, useMemo, useRef } from "react";
// import type { ReactNode } from "react";
// import type { Instance, Props } from "tippy.js";

// export interface EditorBubbleProps {
//   children: ReactNode;
//   tippyOptions?: Partial<Props>;
// }

// export const EditorBubble = forwardRef<HTMLDivElement, EditorBubbleProps>(
//   ({ children, tippyOptions }, ref) => {
//     const { editor } = useCurrentEditor();
//     const instanceRef = useRef<Instance<Props> | null>(null);

//     useEffect(() => {
//       if (!instanceRef.current || !tippyOptions?.placement) return;
//       instanceRef.current.setProps({ placement: tippyOptions.placement });
//       instanceRef.current.popperInstance?.update();
//     }, [tippyOptions?.placement]);

//     const bubbleMenuProps = useMemo(() => {
//       const shouldShow = ({ editor, state }: { editor: any; state: any }) => {
//         const { selection } = state;
//         const { empty } = selection;
//         return editor.isEditable && !editor.isActive("image") && !empty && !isNodeSelection(selection);
//       };

//       return {
//         editor,
//         shouldShow,
//         tippyOptions: {
//           onCreate: (instance: Instance<Props>) => {
//             instanceRef.current = instance;
//             instanceRef.current?.popper.firstChild?.addEventListener("blur", (event) => {
//               event.preventDefault();
//               event.stopImmediatePropagation();
//             });
//           },
//           moveTransition: "transform 0.15s ease-out",
//           ...tippyOptions,
//         },
//       };
//     }, [editor, tippyOptions]);

//     if (!editor) return null;

//     return (
//       <BubbleMenu editor={editor} tippyOptions={{}} shouldShow={({ editor, state }) => true}>
//         <div>My Bubble Menu</div>
//       </BubbleMenu>
//     );
//   },
// );

// EditorBubble.displayName = "EditorBubble";