/**
 * AnnouncementController
 *
 * @description :: Server-side logic for managing announcements
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    Announcement.find().exec(function(err, announcements) {
      return res.view({ announcements: announcements });
    });
  },

  new: function (req, res) {
    return res.view();
  },

  create: function (req, res) {
    Announcement.create(req.param('announcement')).exec(function(err, announcement) {
      return res.redirect('/announcements');
    });
  },


  /**
   * `AnnouncementController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `AnnouncementController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `AnnouncementController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};