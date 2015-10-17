/**
 * ImagesController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    return res.view();
  },

  search: function (req, res) {
    Announcement.random(req.param('search'), function(err, announcement) {
      Image.random(req.param('search'), function(err, image) {
        console.log('announcement', announcement);
        console.log('image', image);

        return res.view({ announcement: announcement, image: image });
      });
    });
  }
};
