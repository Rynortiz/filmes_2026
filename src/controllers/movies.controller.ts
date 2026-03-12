import { Request, Response } from "express";
import Movie from "../models/Movie";

class MoviesController {
  static async findAll(req: Request, res: Response) {
    const movies = await Movie.findAll();

    res.send(movies);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const movie = await Movie.findByPk(Number(id));

    return res.status(200).send(movie);
  }

  static async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name || name == '') {
        return res.status(400).json({ message: 'Nome do filme é obrigatório!' });
    }

    const movie = await Movie.create({ name });
    return res.status(200).send(movie);
  }

  static async remove(req: Request, res: Response) {
    const { id } = req.params;
    const movie = await Movie.findByPk(Number(id));
    if (movie) {
      movie?.destroy();
    } else {
      res.status(404).json({ messsage: "Filme não encontrado" });
    }

    res.status(204).send();
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    const movie = await Movie.findByPk(Number(id));
    if (movie) {
      await movie.update({
        name
      });

      res.status(200).send(movie);
    } else {
      res.status(404).json({ messsage: "Filme não encontrado" });
    }
  }
}

export default MoviesController;
