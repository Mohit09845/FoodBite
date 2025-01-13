import { RequestHandler } from 'express';
import User from '../model/user.model';

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { auth0Id, email } = req.body;

    const existingUser = await User.findOne({ $or: [{ auth0Id }, { email }] });

    if (existingUser) {
      res.status(200).send();
      return;
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
    return;

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error in creating user' });
    return;
  }
};

