// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {Store, Action} from 'redux';
import type {GlobalState} from '@mattermost/types/store';

import manifest from '@/manifest';
import type {PluginRegistry} from '@/types/mattermost-webapp';

import Main from './Components/Main';
import GlobalHeaderRight from './Components/GlobalHeaderRight';

export default class Plugin {
    private registry?: PluginRegistry;

    public async initialize(
        registry: PluginRegistry,
        store: Store<GlobalState, Action<Record<string, unknown>>>
    ): Promise<void> {
        this.registry = registry;

        const showTeamSidebar = false;

        if (registry.registerProduct) {

            registry.registerProduct(
                '/project-overview',       // baseURL
                null,                      // switcherIcon
                'ProjectOverview',         // switcherText
                '/project-overview',       // switcherLinkURL
                Main,                      // mainComponent
                null,                      // headerCentreComponent
                GlobalHeaderRight,         // headerRightComponent
                showTeamSidebar,           // showTeamSidebar
                true,                      // showAppBar
                true,                      // wrapped
                null                       // publicComponent
            );
        }
    }
}

// Ensure Mattermost can register the plugin
declare global {
    interface Window {
        registerPlugin(pluginId: string, plugin: Plugin): void;
    }
}

// Register the plugin with Mattermost
window.registerPlugin(manifest.id, new Plugin());
