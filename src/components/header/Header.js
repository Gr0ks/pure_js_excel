/* eslint-disable require-jsdoc */
import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHTML() {
    return `
        <input type="text" class="header__input input" value="Новая таблица" />
        
        <div class="header__buttons">
          <div class="button">
            <i class="material-icons">delete</i>
          </div>

          <div class="button">
            <i class="material-icons">exit_to_app</i>
          </div>
        </div>
    `
  }
}
