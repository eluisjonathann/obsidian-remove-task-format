# Remove Task Format for Obsidian

This plugin adds a simple hotkey command to remove task checkbox formatting (`[ ]` or `[x]`) from the current line, converting it back to a standard bullet list item (`- `) or plain text while keeping your indentation.

## Installation

### From the Obsidian Community Plugin Directory
1. Open Obsidian Settings.
2. Go to **Community plugins** and click **Browse**.
3. Search for `Remove Task Format`.
4. Click **Install**, then **Enable**.

### Manual Installation
1. Download `main.js` and `manifest.json` from the latest release.
2. Create a folder named `remove-task-format` in your vault's `.obsidian/plugins/` directory.
3. Move the downloaded files into that folder.
4. Reload community plugins in Obsidian and enable the plugin.

## Usage

1. Go to **Settings > Hotkeys**.
2. Search for the command: `Remove task format from current line`.
3. Assign your preferred keyboard shortcut (for example, `Ctrl+Shift+L` or `Ctrl+Alt+L`).
4. Place your cursor on any line formatted as a task (e.g. `- [ ] My Task` or `- [x] Completed Task`).
5. Press your assigned hotkey. The checkbox formatting will be removed, turning the line back into a standard list item (e.g. `- My Task` or `- Completed Task`).
