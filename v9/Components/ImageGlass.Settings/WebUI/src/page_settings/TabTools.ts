import { ITool } from '@/@types/settings_types';
import { getChangedSettingsFromTab } from '@/helpers';
import Language from './Language';

export default class TabTools {
  /**
   * Loads settings for tab Tools.
   */
  static loadSettings() {
    TabTools.loadToolList();
  }


  /**
   * Adds events for tab Tools.
   */
  static addEvents() {
  }


  /**
   * Save settings as JSON object.
   */
  static exportSettings() {
    const settings = getChangedSettingsFromTab('tools');

    return settings;
  }


  private static loadToolList(list?: ITool[]) {
    if (Array.isArray(list) && list.length > 0) {
      _pageSettings.toolList = list;
    }
    const toolList = _pageSettings.toolList || [];

    const tbodyEl = query<HTMLTableElement>('#Table_ToolList > tbody');
    let tbodyHtml = '';

    for (const item of toolList) {
      let args = '<i lang-text="_._Empty"></i>';
      if (item.Arguments) {
        args = `<code>${item.Arguments}</code>`;
      }

      const trHtml = `
        <tr data-tool-id="${item.ToolId}"
          data-tool-name="${item.ToolName}"
          data-tool-integrated="${item.IsIntegrated}"
          data-tool-executable="${item.Executable}"
          data-tool-arguments="${item.Arguments}">
          <td class="cell-counter"></td>
          <td class="cell-sticky text-nowrap">${item.ToolId}</td>
          <td class="text-nowrap">${item.ToolName}</td>
          <td lang-text="_.${item.IsIntegrated ? '_Yes' : '_No'}"></td>
          <td>
            <kbd>Ctrl+S</kbd>
          </td>
          <td class="text-nowrap">
            <code>${item.Executable}</code>
          </td>
          <td class="text-nowrap">${args}</td>
          <td class="cell-sticky-right text-nowrap" width="1" style="border-left: 0;">
            <button type="button" class="px-1" lang-title="_._Edit" data-action="edit">✏️</button>
            <button type="button" class="px-1 ms-1" lang-title="_._Delete" data-action="delete">❌</button>
          </td>
        </tr>
      `;

      tbodyHtml += trHtml;
    }

    tbodyEl.innerHTML = tbodyHtml;
    Language.load();

    queryAll<HTMLButtonElement>('#Table_ToolList button[data-action]').forEach(el => {
      el.addEventListener('click', async (e) => {
        const action = (e.target as HTMLInputElement).getAttribute('data-action');
        const trEl = (e.target as HTMLInputElement).closest('tr');
        const toolId = trEl.getAttribute('data-tool-id');

        if (action === 'delete') {
          trEl.remove();
        }
        else if (action === 'edit') {
          const newToolList = await postAsync<ITool[]>('Tool_Edit', toolId);
          TabTools.loadToolList(newToolList);
        }
      }, false);
    });
  }
}
