/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {
  '/': {
    view: 'homepage'
  },

  'get  /announcements':             'AnnouncementsController.index',
  'get  /announcements/new':         'AnnouncementsController.new',
  'post /announcements/create':      'AnnouncementsController.create',
  'get  /announcements/:id?/edit':   'AnnouncementsController.edit',
  'put  /announcements/update/:id?': 'AnnouncementsController.update',

  'get  /images':                 'ImagesController.index',
  'get  /images/new':             'ImagesController.new',
  'post /images/create':          'ImagesController.create',
  'get  /images/:id?/edit':       'ImagesController.edit',
  'get  /images/:id?/attachment': 'ImagesController.attachment',
  'put  /images/update/:id?':     'ImagesController.update',
  'get  /images/:id?/delete':     'ImagesController.destroy'
};
