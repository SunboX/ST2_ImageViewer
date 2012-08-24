Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': '../../ux'
    }
});

Ext.define('Demo.Viewport', {
    extend: 'Ext.Carousel',
    xtype : 'my-viewport',
    config: {
        items: [
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'http://farm8.staticflickr.com/7221/7235213534_185edd24b4_o.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc : 'http://farm9.staticflickr.com/8025/7235181544_61762d3de7_o.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'http://farm8.staticflickr.com/7242/7220454816_7972682ea1_o.jpg'
            },
            {
                xtype: 'imageviewer',
                style: {
                    backgroundColor: '#333'
                },
                imageSrc: 'http://farm9.staticflickr.com/8157/7235176916_ab1c229fdd_o.jpg'
            }
        ],
        listeners: {
            activeitemchange: function(container, value, oldValue, eOpts) {
                if (oldValue) {
                    oldValue.resetZoom();
                    this.getActiveItem().resize();
                }
            },
            resize: function(component, eOpts) {
                this.getActiveItem().resize();
            }
        }
    },
    onDragStart: function(e) {
        var scroller = this.getActiveItem().getScrollable().getScroller();
        if (e.targetTouches.length === 1 && (e.deltaX < 0 && scroller.getMaxPosition().x === scroller.position.x) || (e.deltaX > 0 && scroller.position.x === 0)) {
            this.callParent(arguments);
        }
    },
    onDrag: function(e) {
        if (e.targetTouches.length == 1)
            this.callParent(arguments);
    },
    onDragEnd: function(e) {
        if (e.targetTouches.length < 2)
            this.callParent(arguments);
    }
});

Ext.define('Demo.ViewportPanel', {
    extend: 'Ext.Panel',
    xtype : 'my-viewport-panel',
    config: {
        fullscreen: true,
        layout: 'fit',
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            items: [
                {
                    text: 'ZoomIn',
                    listeners: {
                        tap: function() {
                            Ext.getCmp('myCarousel').getActiveItem().onZoomIn();
                        }
                    }
                },
                {
                    text: 'ZoomOut',
                    align: 'right',
                    listeners: {
                        tap: function() {
                            Ext.getCmp('myCarousel').getActiveItem().onZoomOut();
                        }
                    }

                }
            ]
        }, {
            xtype: 'my-viewport',
            id: 'myCarousel'
        }]
    }
});

Ext.application({

    name  : 'ImageViewer Carousel Demo',
    views : [
        'Ext.ux.ImageViewer'
    ],
    launch: function() {

        Ext.Viewport.add({
            xtype: 'my-viewport-panel'
        });
    }
});