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

  edit: function (req, res) {
    Announcement.findOne(req.param('id')).exec(function(err, item) {
      return res.view({ announcement: item });
    });
  },

  update: function (req, res) {
    Announcement.update(req.param('id'), req.param('announcement')).exec(function(err, announcement) {
      return res.redirect('/announcements');
    });
  },

  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};
