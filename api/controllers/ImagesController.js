/**
 * ImagesController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    Image.find().exec(function(err, images) {
      return res.view({ images: images });
    });
  },

  new: function (req, res) {
    return res.view();
  },

  create: function (req, res) {
    req.file('attachment').upload(function(err, files) {
        if (err) { return res.negotiate(err); }
        if (files.length === 0) { return res.badRequest('No file was uploaded'); }

        var dataImage = { attachment_path: files[0].fd };

        Image.create(dataImage).exec(function(err, image) {
          return res.redirect('/images');
        });
      }
    );
  },

  edit: function (req, res) {
    Image.findOne(req.param('id')).exec(function(err, image) {
      return res.view({ image: image });
    });
  },

  attachment: function (req, res) {
    Image.findOne(req.param('id')).exec(function(err, image) {
      if (!image.attachment_path) {
        return res.notFound();
      }

      var SkipperDisk = require('skipper-disk');
      var fileAdapter = SkipperDisk();

      fileAdapter.read(image.attachment_path).on('error', function (err) {
        return res.serverError(err);
      }).pipe(res);
    });
  },

  update: function (req, res) {
    Image.update(req.param('id'), req.param('image')).exec(function(err, image) {
      return res.redirect('/images');
    });
  },

  destroy: function (req, res) {
    Image.findOne(req.param('id')).exec(function(err, image) {
      Image.destroy(image.id).exec(function(err) {
        require('fs').unlink(image.attachment_path, function(err) {
          if (err) throw err;
        });

        return res.redirect('/images');
      });
    });
  }
};
