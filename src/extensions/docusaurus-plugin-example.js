function docusaurusPluginExample(context, options) {
    return {
        name: 'docusaurus-plugin-example',
        async contentLoaded({content, actions}) {
            const {setGlobalData, addRoute} = actions;


            //todo in component const pluginData = usePluginData('docusaurus-plugin-example')
            setGlobalData({data: 'pluginData!!!'});
        },

        getClientModules() {
            // Return an array of paths to the modules that are to be imported
            // in the client bundle. These modules are imported globally before
            // React even renders the initial UI.
            return [
                // require.resolve('./client-module-example.js')
            ]
        },

    };
}

module.exports = docusaurusPluginExample;