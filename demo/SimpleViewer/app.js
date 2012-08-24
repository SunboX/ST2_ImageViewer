Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': '../../ux'
    }
});

Ext.application({

    name  : 'Simple ImageViewer Demo',
    views : [
        'Ext.ux.ImageViewer'
    ],
    launch: function() {

        Ext.Viewport.add({
            xtype: 'imageviewer',
            style: {
                backgroundColor: '#333'
            },
            imageSrc: 'http://farm8.staticflickr.com/7242/7220454816_7972682ea1_o.jpg'
        });
    }
});