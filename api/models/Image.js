module.exports = {
  attributes: {
    attachment_path: {
      type: 'string',
      required: true
    },

    gender: {
      type: 'string',
      enum: ['male', 'female']
    },

    looking_for: {
      type: 'string',
      enum: ['male', 'female']
    },

    age: {
      type: 'string',
      enum: ['young', 'medium', 'old']
    }
  },

  random: function(opts, cb) {
    var self = this;

    self.find({
      where: { gender: opts.gender, looking_for: opts.looking_for, age: opts.age },
      limit: 1, sort: 'RAND()'
    }).exec(function(err, items) {
      if (err) return cb(err);
      cb(null, items[0]);
    });
  }
};
