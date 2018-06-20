/*!
 * blogplugin
 */

 "use strict";

/*!
 * Module dependencies
 */
var contentstack =  require('contentstack-express');
var config = contentstack.config
const stack = contentstack.Stack(config.get('apikey'), config.get('accesstoken'), config.get('environment'))
//var environment = config.get("environment")
module.exports = function Blogplugin() {

   /*
    * Blogplugin.options provides the options provided in the configuration.
    */

   var options = Blogplugin.options;

   /*
    * @templateExtends
    * @Description: Allows to extend the template engine functionality such as adding filters, macros etc.
    * @Parameter: engine - template engine object
    * @Example: using Nunjucks
           Blogplugin.templateExtends = function(engine) {
               // engine loader, setting filters etc.
               engine.getEnvironment().addFilter("shorten", function(str, count) {
                   return str.slice(0, count || 5);
               });
           };
    * @Usage: template file
           A message for you: {{ message | shorten }}
    */
   Blogplugin.templateExtends = function(engine) {
    
    engine.getEnvironment().addFilter("shorten", function(str, count) {
        return str.slice(0, count || 10);
      });
   };

   /*
    * @serverExtends
    * @Description: Allows to extend the server capabilities by adding a new or modifing the existing routes/middlewares.
    * @Parameters: app, contentstack express instance.
    * @Example:
           Blogplugin.serverExtends = function(app) {
               app
                   .use(function(req, res, next){
                       // your code goes here
                       next();
                   });
 
               app
                   .extends()
                   .get('/test', function(req, res, next){
                       // your code goes here
                       next();
                   });
           };
    */
    Blogplugin.serverExtends = function(app) {
    app
    .extends()
    .get('/blogs', function(req, res, next){
    // your code goes here
    var query = stack.ContentType('blogs').Query().toJSON().find();
    query.spread(
        function(data) {
            
            //req.getViewContext().set(`blogs`, entry);
            res.render('pages/blogs/index',{
                title: 'List of Blogs',
                entry : data
            })
            
        //next();
        }, function(error) {
            req.getViewContext().set("data", {});
            next();
        }
    );
    });
    };
  
   /*
    * @beforePublish
    * @Description: This function is triggered when the publish event occurs.
    * @Parameters: data - contains published entry, it's content_type and language.
    * @Parameters: next - call this function to pass control to the next subsequent "beforePublish" hook.
    *              It is important to call the next() function, it will affect the publish process,
    *              the entry will get stuck to "in-prgoress" state.
    * @Example:
           Blogplugin.beforePublish = function(data, next) {
               *
               * var entry = data.entry;
               * var contentType = data.contentType;
               * var language = data.language;
               *
           };
    */
   Blogplugin.beforePublish = function (data, next) {
       next();
   };
  
   /*
    * @beforeUnpublish
    * @Description: This function is triggered when the unpublish or delete event occurs.
    * @Parameters: data - contains un-published entry, it's content_type and language.
    * @Parameters: next - call this function to pass control to the next subsequent "beforeUnpublish" hook.
    *              It is important to call the next() function, it will affect the unpublish process,
    *              the entry will get stuck to "in-prgoress" state.
    * @Example:
           Blogplugin.beforeUnpublish = function(data, next) {
               *
               * var entry = data.entry;
               * var contentType = data.contentType;
               * var language = data.language;
               *
           };
    */
   Blogplugin.beforeUnpublish = function (data, next) {
       next();
   };
};


