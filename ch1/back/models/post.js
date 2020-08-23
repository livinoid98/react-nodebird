module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        content: {
            type: DataTypes.TEXT, // 매우 긴 글, 글자 수가 몇 글자 되는지 모를 때
            allowNull: false,
        },
    },{
        charset: 'utf8mb4', //한글 + 이모티콘 , 게시글에 이모티콘도 되는 언어타입
        collate: 'utf8mb4_general_ci',
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsTo(db.Post, {as: 'Retweet'});
        db.Post.belongsToMany(db.HashTag, {through: 'PostHashTag'});
        db.Post.belongsToMany(db.User, {through: 'Like', as: 'Likers'});
    };

    return Post;
};