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
  }
};
