const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../models');
const { CommunityPost } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id },
      include: [{
          model: User,
          attributes: ["id", "nick"],
          as: "Followers",
        }, {
          model: User,
          attributes: ['id', 'nick'],
          as: 'Followings',
        }, {
          model: CommunityPost,
          attributes: ['id'],
          as: 'Likes',
      }],
    })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
  local();
  kakao();
};
