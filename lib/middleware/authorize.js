const Item = require('../models/Item');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'PUT') {
      const item = await Item.getById(req.params.id);
      if (req.user.id !== item.user_id) {
        throw new Error('Unauthorized');
      }
    }
    next();
  } catch(e) {
    e.status = 403;
    next(e);
  }
};
