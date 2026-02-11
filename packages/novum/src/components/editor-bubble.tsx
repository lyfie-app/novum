import { isNodeSelection, useCurrentEditor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import type { BubbleMenuProps } from "@tiptap/react/menus";
import { forwardRef, useMemo } from "react";
import type { ReactNode } from "react";

export interface EditorBubbleProps extends Omit<BubbleMenuProps, "editor"> {
  readonly children: ReactNode;
  readonly className?: string;
}

export const EditorBubble = forwardRef<HTMLDivElement, EditorBubbleProps>(
  ({ children, className, options, ...rest }, ref) => {
    const { editor: currentEditor } = useCurrentEditor();

    const bubbleMenuProps = useMemo(() => {
      const shouldShow: BubbleMenuProps["shouldShow"] = ({ editor, state }) => {
        const { selection } = state;
        // Simplified check for troubleshooting
        return editor.isEditable && !selection.empty && !isNodeSelection(selection);
      };

      return {
        shouldShow,
        options: {
          moveTransition: "transform 0.15s ease-out",
          ...options,
        },
        ...rest,
      };
    }, [options, rest]); // We don't need currentEditor in the memo if we pass it directly below

    if (!currentEditor) return null;

    return (
      <div ref={ref} className={className}>
        <BubbleMenu 
          {...bubbleMenuProps} 
          editor={currentEditor} // Passing it here is more reliable in v3
        >
          {children}
        </BubbleMenu>
      </div>
    );
  }
);

EditorBubble.displayName = "EditorBubble";

export default EditorBubble;