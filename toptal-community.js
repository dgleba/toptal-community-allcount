var request=require('request');
var Q = require('q');
var xml2js = require('xml2js');
var moment = require('moment');
var injection = require('allcountjs');
injection.bindFactory('port', 9080);
injection.bindFactory('dbUrl', 'mongodb://localhost:27017/toptal-community');
injection.bindFactory('gitRepoUrl', 'toptal-community-repo');

injection.bindFactory('DiscussionEventsImport', function (Crud) {
    return {
        importEvents: function () {
            return Q.nfcall(request, "http://www.toptal.com/blog.rss").then(function (responseAndBody) {
                var body = responseAndBody[1];
                return Q.nfcall(xml2js.parseString, body).then (function (feed) {
                    var events = feed.rss.channel[0].item.map(function (item) { return {
                        eventName: "Discussion of " + item.title, 
                        date: moment(item.pubDate, "DD MMM YYYY").add(1, 'day').toDate(), 
                        time: "12:00"
                    }});
                    var crud = Crud.crudForEntityType('Event');
                    return Q.all(events.map(function (event) {
                        return crud.find({query: {eventName: event.eventName}}).then(function (createdEvent) {
                            if (!createdEvent[0]) {
                                return crud.createEntity(event);
                            }
                        });
                    } ));
                });
            })
        }
    };
});

var server = injection.inject('allcountServerStartup');
server.startup(function (errors) {
    if (errors) {
        throw new Error(errors.join('\n'));
    }
});