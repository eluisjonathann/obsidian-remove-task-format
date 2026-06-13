const { Plugin } = require('obsidian');

module.exports = class RemoveTaskPlugin extends Plugin {
    async onload() {
        this.addCommand({
            id: 'remove-task-format',
            name: 'Remove task format from current line',
            editorCallback: (editor, view) => {
                const cursor = editor.getCursor();
                const lineText = editor.getLine(cursor.line);
                
                // Matches indentation, optional list marker (e.g. - or * or 1.) and checkbox
                const taskRegex = /^(\s*)([-*+]|\d+\.)?\s*\[[xX ]\]\s*(.*)$/;
                
                if (taskRegex.test(lineText)) {
                    // Removes both the list marker (hyphen/number) and the checkbox, keeping indentation and text
                    const newLineText = lineText.replace(taskRegex, (match, indentation, prefix, content) => {
                        return `${indentation}${content}`;
                    });
                    editor.setLine(cursor.line, newLineText);
                }
            }
        });
    }
}
