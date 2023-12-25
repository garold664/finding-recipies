import icons from 'url:../../img/icons.svg'; // Parcel 2 - we using this syntax for non scripts
export default class View {
  _data;

  //! 00:50 View.js
  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data the data to be rendered (e.g. recipe)
   * @param {boolean} [isToRender=true] if false, create markup string, instead of rendering to the DOM
   * @returns {undefined | string}
   * @this {Object} View instance
   * @author
   * @todo Finish Implementation
   */
  render(data, isToRender = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!isToRender) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // this will create virtual dom in memory
    // https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment
    const newElements = Array.from(newDOM.querySelectorAll('*'));

    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      //! Update text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
        //! finding only elements that have text as a direct child
      ) {
        curEl.textContent = newEl.textContent;
      }

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner(parentEl) {
    const markup = `
      <div class="spinner">
        <svg class="spinner">
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="src/img/icons.svg#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="src/img/icons.svg#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
