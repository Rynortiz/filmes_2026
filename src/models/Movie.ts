import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Movie extends Model {
  public id!: number;
  public name!: string;
}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "Movies",
  },
);

export default Movie;