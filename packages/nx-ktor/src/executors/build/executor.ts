import { ExecutorContext } from '@nx/devkit';
import * as path from 'path';
import { BuildExecutorOptions } from './schema';
import { runKtorPluginCommand } from '../../utils/ktor-utils';

export async function buildExecutor(
  options: BuildExecutorOptions,
  context: ExecutorContext
) {
  const root = path.resolve(context.root, options.root);
  return runKtorPluginCommand('build', options.args, {
    cwd: root,
    ignoreWrapper: options.ignoreWrapper,
  });
}

export default buildExecutor;
