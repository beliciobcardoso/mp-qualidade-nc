'use client'
import BulletList from '@tiptap/extension-bullet-list'
import Color from '@tiptap/extension-color'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import OrderedList from '@tiptap/extension-ordered-list'
import TextAlign from '@tiptap/extension-text-align'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ImageResize from 'tiptap-extension-resize-image'
import ToolBar from './toolBar'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
}

export default function RichTextEditor({
  content,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'list-decimal ml-3',
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc ml-3',
        },
      }),
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: {
          class: 'font-bold p-2 rounded-md',
        },
      }),
      Color.configure(),
      Image,
      ImageResize,
    ],
    content,
    editorProps: {
      attributes: {
        class: 'border rounded-md bg-slate-50 py-2 px-3',
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML())
      if (editor.getHTML() === '<p></p>') {
        onChange('')
      } else {
        onChange(editor.getHTML())
      }
    },
  })

  return (
    <div>
      {editor && <ToolBar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  )
}
