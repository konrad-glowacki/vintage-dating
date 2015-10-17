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
  }
};
