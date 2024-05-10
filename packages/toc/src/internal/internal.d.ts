import type { TocItem } from '../action/action.d.ts';
import type { ResolvedTocConfig } from '../parameter/parameter.d.ts';

/**
 * @package
 */
export type TocCacheItem = {
	config: ResolvedTocConfig;
	items: Map<string, TocItem>;
	activeTocItemId?: string;
	observeThrottled: boolean;
};
