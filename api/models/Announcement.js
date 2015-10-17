module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },

    content: {
      type: 'text',
      required: true
    },

    gender: {
      type: 'string',
      enum: ['male', 'female'],
      required: true
    },

    looking_for: {
      type: 'string',
      enum: ['male', 'female'],
      required: true
    },

    age: {
      type: 'string',
      enum: ['young', 'medium', 'old'],
      required: true
    }
  },

  random: function(opts, cb) {
    var self = this;

    self.find({
      where: { gender: opts.gender, looking_for: opts.looking_for, age: opts.age },
      limit: 1, order: 'RAND()'
    }).exec(function(err, items) {
      if (err) return cb(err);
      cb(null, items[0]);
    });
  }
};
