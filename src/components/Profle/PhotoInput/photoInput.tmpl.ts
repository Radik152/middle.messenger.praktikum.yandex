import css from './PhotoInput.module.scss';

export const tmpl = `
    <label for="avatar">
        <div class="${css.inputBlock}"></div>
        <input class="${css.inputFile}" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
    </label>
`;