/* eslint-disable class-methods-use-this */
import handlebars from 'handlebars';
import fs from 'fs';

interface ITemplateVariables {
  [key: string]: string | number;
}

interface ParseMailTemplate {
  file: string;
  variables: ITemplateVariables;
}

export default class HandlebarsMailTemplate {
  async parse({ file, variables }: ParseMailTemplate): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}
