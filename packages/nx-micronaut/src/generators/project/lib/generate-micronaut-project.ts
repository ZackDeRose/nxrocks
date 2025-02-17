import { Tree, logger, stripIndents, workspaceRoot } from '@nx/devkit';

import fetch from 'node-fetch';
import { NormalizedSchema } from '../schema';
import { buildMicronautDownloadUrl } from '../../../utils/micronaut-utils';
import {
  extractFromZipStream,
  getCommonHttpHeaders,
  NX_MICRONAUT_PKG,
} from '@nxrocks/common';

export async function generateMicronautProject(
  tree: Tree,
  options: NormalizedSchema
): Promise<void> {
  const downloadUrl = buildMicronautDownloadUrl(options);

  logger.info(
    `⬇️ Downloading Micronaut project zip from : '${downloadUrl}'...`
  );

  const response = await fetch(
    downloadUrl,
    getCommonHttpHeaders(NX_MICRONAUT_PKG, downloadUrl, options.proxyUrl)
  );

  logger.info(
    `📦 Extracting Micronaut project zip to '${workspaceRoot}/${options.projectRoot}'...`
  );

  if (response.ok) {
    await extractFromZipStream(response.body, (entryPath, entryContent) => {
      const innerFolder = options.fullPackage.substring(
        options.fullPackage.lastIndexOf('.') + 1
      );
      const filePath = entryPath.replace(`${innerFolder}/`, ''); // remove the inner folder in the zip
      const execPermission =
        filePath.endsWith('mvnw') || filePath.endsWith('gradlew')
          ? '755'
          : undefined;
      tree.write(`${options.projectRoot}/${filePath}`, entryContent, {
        mode: execPermission,
      });
    });
  } else {
    throw new Error(stripIndents`
        ❌ Error downloading Micronaut project zip from '${
          options.micronautLaunchUrl
        }'
        If the problem persists, please open an issue at https://github.com/tinesoft/nxrocks/issues, with the following information:
        ------------------------------------------------------
        Download URL: ${downloadUrl}
        Response status: ${response.status}
        Response headers: ${JSON.stringify(response.headers)}
        Response body: ${await response.text()}
        ------------------------------------------------------`);
  }
}
