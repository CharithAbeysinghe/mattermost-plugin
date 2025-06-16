// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import type {Store, Action} from 'redux';
import type {GlobalState} from '@mattermost/types/store';


import manifest from '@/manifest';

import Main from './Components/Main';
// import Test from './Components/Test';


const MyHeaderCenter = () => {
    return null;
};
const MyHeaderRight = () => {
    return null;
};


export default class Plugin {

    public async initialize(
        registry: any, store: Store<GlobalState, Action<Record<string, unknown>>>): Promise<void> {

            registry.registerProduct(
                    '/project-overview',    // baseURL (path prefix)
                    'product-channels',                // switcherIcon (string icon name or JSX icon)
                    'Project Overview',     // switcherText (displayed in product switcher)
                    '/project-overview',   // switcherLinkURL (where it links)
                    Main,         // mainComponent (React component)
                    MyHeaderCenter,
                    MyHeaderRight,
                    true,
            );

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
