module.exports = (sequelize,DataTypes) => {
    
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        createdAt: {
            type: DataTypes.DATEONLY,
        },
        updatedAt:{
            type: DataTypes.DATEONLY,
        }
    });
    return Posts;
}