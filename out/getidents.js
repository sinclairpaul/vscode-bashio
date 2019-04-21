"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class GetEntities {
}
exports.GetEntities = GetEntities;
async;
getEntityCompletions();
Promise < HomeAssistantCompletionItem[] > {
    let, entities = yield this.getHassEntities(),
    if(, entities) {
        return [];
    },
    let, completions: HomeAssistantCompletionItem[] = [],
    for(, [key, value], of, Object) { }, : .entries(entities)
};
{
    let completionItem = new HomeAssistantCompletionItem(`${value.entity_id}`, vscode.CompletionItemKind.EnumMember);
    completionItem.filterText = ` ${value.entity_id}`; // enable a leading space
    completionItem.insertText = completionItem.filterText;
    completionItem.documentation = new vscode.MarkdownString(`**${value.entity_id}** \r\n \r\n`);
    if (value.state) {
        completionItem.documentation.appendMarkdown(`State: ${value.state} \r\n \r\n`);
    }
    completionItem.documentation.appendMarkdown(`| Attribute | Value | \r\n`);
    completionItem.documentation.appendMarkdown(`| :---- | :---- | \r\n`);
    for (const [attrKey, attrValue] of Object.entries(value.attributes)) {
        completionItem.documentation.appendMarkdown(`| ${attrKey} | ${attrValue} | \r\n`);
    }
    completions.push(completionItem);
}
return completions;
//# sourceMappingURL=getidents.js.map