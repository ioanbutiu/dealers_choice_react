const Sequelize = require('sequelize');
const { STRING, TEXT } = Sequelize;

const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_react'
);

const User = conn.define('user', {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const Post = conn.define('post', {
  content: {
    type: TEXT,
    allowNull: false,
    alidate: {
      notEmpty: true,
    },
  },
});

Post.belongsTo(User, { as: 'poster' });
User.hasMany(Post);

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  const aaron = await User.create({ name: 'Aaron' });
  const ben = await User.create({ name: 'Ben' });
  const caitlyn = await User.create({ name: 'Caitlyn' });

  await Promise.all([
    Post.create({
      content: 'Lorem ipsum dolor sit amet',
      posterId: aaron.id,
    }),
    Post.create({
      content: 'Lorem ipsum dolor sit amet',
      posterId: ben.id,
    }),
    Post.create({
      content: 'Lorem ipsum dolor sit amet',
      posterId: caitlyn.id,
    }),
  ]);
};

module.exports = {
  syncAndSeed,
  User,
  Post,
};
