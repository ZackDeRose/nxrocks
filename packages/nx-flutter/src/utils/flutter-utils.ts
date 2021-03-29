import { execSync } from 'child_process'
import { NormalizedSchema } from '../generators/application/schema';

export function isFlutterInstalled(): boolean {
    try {
        execSync('flutter --version', {  stdio: ['ignore', 'ignore', 'ignore'] });
        return true;
    } catch (e) {
        return false;
    } 
}

export function quote(text: string){
    if(!text || (text.startsWith('"') && text.endsWith('"'))){
        return text;
    } else {
        return `"${text.replace('"','\\"')}"`;
    }
}

export function  buildFlutterCreateOptions(options: NormalizedSchema) {
    const keyValueParams = [
        {key: 'project-name', value: options.projectName.replace(new RegExp('-', 'g'), '_')},
        {key: 'org', value: options.org},
        {key: 'description', value: quote(options.description)},
        {key: 'android-language', value: options.androidLanguage},
        {key: 'ios-language', value: options.iosLanguage},
        {key: 'template', value: options.template},
        {key: 'sample', value: options.sample},
        {key: 'platforms', value: options.platforms? quote(options.platforms.join(',')):null}
    ].filter(e => !!e.value);

    let opts = keyValueParams.map(e => `--${e.key}=${e.value}`).join(' ');

    const boolParams = [
        {key: 'pub', value: options.pub},
        {key: 'offline', value: options.offline},
        
    ].filter(e => !!e.value);

    opts += ' ' + boolParams.map(e => {
        if(e.value === true)
            return `--${e.key}`;
        else if(e.value === false)
            return `--no-${e.key}`;
        return '';
    }).join(' ');

    return opts;
}
