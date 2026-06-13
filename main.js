const { Plugin } = require('obsidian');

module.exports = class RemoveTaskPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'remove-task-format',
            name: 'Remove task format from current line',
            editorCallback: (editor, view) => {
                const cursor = editor.getCursor();
                const lineText = editor.getLine(cursor.line);
                
                // Matches optional list marker (e.g. - or * or 1.) followed by checkbox e.g. [ ] or [x]
                const taskRegex = /^(\s*[-*+]|\s*\d+\.)?\s*\[[xX ]\]\s*(.*)$/;
                
                if (taskRegex.test(lineText)) {
                    // Replaces the checkbox but keeps the indentation/list marker and the text
                    // If there's a list marker, we keep it. If there was none, it becomes plain text.
                    const newLineText = lineText.replace(taskRegex, (match, prefix, content) => {
                        if (prefix) {
                            return `${prefix} ${content}`;
                        } else {
                            return content;
                        }
                    });
                    editor.setLine(cursor.line, newLineText);
                }
            }
        });
    }
}
