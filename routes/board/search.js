const express = require('express');
const url = require('url');
const { CommunityPost, Sequelize, User } = require('../../models');
const router = express.Router();

const Op = Sequelize.Op;    // LIKE

/* 검색 기능 */
router.get('/', async (req, res, next) => {
  try {
    let queryData = url.parse(req.url, true).query;
    let search = queryData.search;
    let select = queryData.select;

    const titleContents = await CommunityPost.findAll({
      include: { 
        model: User,
        attribute: ['id', 'nick'],
      },
      where: {
      [Op.or]: [{
          content : {
            [Op.like]: "%" + search + "%"
          }
        }, {
          title : {
            [Op.like]: "%" + search + "%"
          }
        },
      ]
      },
      order: [['createdAt', 'DESC']],
    });

    const contents = await CommunityPost.findAll({
      include: { 
        model: User,
        attribute: ['id', 'nick'],
      },
      where: {
        content : {
          [Op.like]: "%" + search + "%"
        },
      },
      order: [['createdAt', 'DESC']],
    });

    const titles = await CommunityPost.findAll({
      include: { 
        model: User,
        attribute: ['id', 'nick'],
      },
      where: {
        title : {
          [Op.like]: "%" + search + "%"
        },
      },
      order: [['createdAt', 'DESC']],
    });

    const users = await CommunityPost.findAll({
      include: { 
        model: User,
        attribute: ['id', 'nick'],
        where: {
          nick : {
            [Op.like]: "%" + search + "%"
          },
        }
      },
      order: [['createdAt', 'DESC']],
    });

    console.log(select);
    if (select == 'titleContent') {
      texts = titleContents;
    } else if (select == 'content') {
      texts = contents;
    } else if (select == 'title') {
      texts = titles;
    } else {
      texts = users;
    }

    res.render('board/main-community', {
      title: `mountain - ${search} 검색 결과`,
      communityTwits: texts,
    });
  } catch (error) {
    console.error(error);
    next(error);
  };
});

module.exports = router;