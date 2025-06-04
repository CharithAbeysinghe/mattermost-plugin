// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import type {Store, Action} from 'redux';
import type {GlobalState} from '@mattermost/types/store';

import manifest from '@/manifest';

import Main from './Components/Main';
import GlobalHeaderRight from './Components/GlobalHeaderRight';

const Icon = () => <i className='icon fa fa-plug'/>;

const GlobalHeaderCenter = () => {
    return null;
};

const BackstageWrapped = () => (
    
    <Main/>
  
);

export default class Plugin {

    public async initialize(
        registry: any, store: Store<GlobalState, Action<Record<string, unknown>>>): Promise<void> {

        const showTeamSidebar = false;

        if (registry.registerProduct) {

            registry.registerProduct(
            '/project-overview',       // baseURL
            Icon,                      // switcherIcon
            'ProjectOverview',         // switcherText
            '/project-overview',     // switcherLinkURL
            Main,                      // mainComponent
            GlobalHeaderCenter,        // headerCentreComponent
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
