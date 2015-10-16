module.exports = {
  attributes: {
    content: {
      type: 'text',
      required: true
    },

    sex: {
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
      require: true
    }
  }
};
