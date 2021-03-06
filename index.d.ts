
export default class Localizer {

    constructor(localizationOrPath?: ILocalization | string, options?: IOptions);

    setLocalization(localization: ILocalization): Localizer;

    loadSyncLocalization(path: string): Localizer;

    loadLocalization(path: string): Promise<Localizer>;

    addLocalization(localization: ILocalization): Localizer;

    setLocal(local: string): Localizer;

    setDefault(defaultLocal: string): Localizer;

    setOptions(options?: IOptions): Localizer;

    get({key, local, replacements}: { key: string, local?: string, replacements?: string[] }): { text: string, local: string } | undefined ;

    getOptions(): IOptions;

}

interface ILocalization {
    [key: string]: ILocalizationItem;
}

interface ILocalizationItem {
    [local: string]: string;
}

interface IOptions {
    default?: string,
    local?: string,
}


