import IconsLibrary from "@/icons/icons.library";

const selectors = {
    svg_holder: 'path_svg_holder',
}
export class Icons {

    static setSvgCanvas() {
        const document_element = document.getElementById(selectors.svg_holder);

        const svg = Icons.createSvg();

        if (document_element) {
            // Очистим его содержимое
            document_element.innerHTML = '';

            // Добавляем иконки
            document_element.appendChild(svg);

            return;
        }

        const svg_holder = document.createElement('div');

        svg_holder.setAttribute('id', selectors.svg_holder);

        svg_holder.classList.add('hidden');

        // Добавляем иконки
        svg_holder.appendChild(svg);

        // Вставим контейнер с svg на страницу
        document.body.appendChild(svg_holder);
    }

    static createSvg() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        let html = '';

        console.error()

        for (const key_value_list of Object.entries(IconsLibrary.LIBRARY)) {
            // Соберем все в одну строку
            html += key_value_list[1];
        }

        for (const key_value_list of Object.entries(IconsLibrary.COMPLEX_LIBRARY)) {
            // Соберем все в одну строку
            html += key_value_list[1];
        }

        svg.innerHTML = html;

        return svg;
    }
}

export default {
    Icons,
    selectors
}