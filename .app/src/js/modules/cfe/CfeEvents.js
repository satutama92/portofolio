var CfeEvents = (function () {
    var CfeEvents = function (store, options) {
        this.store = store;
        this.events = options.events;
        this.init();
    };

    Object.assign(CfeEvents.prototype, {
        init: function () {
            this.store.subscribe(this.handleSubscribeStore.bind(this));
        },

        handleSubscribeStore: function () {
            var state = this.store.getState(),
                lastAction = state.lastAction;

            if (this.events[lastAction.type]) {
                this.events[lastAction.type].call(this.store, lastAction);
            }
        }
    });

    return CfeEvents;
})();
