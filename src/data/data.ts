import { AppDataSource } from "./data-source";
import { User } from "../entity/User";

const userRepository = AppDataSource.getRepository(User);

export default {
  async addUser(user: { name: string; age: number }) {
    try {
      const newUser = userRepository.create(user);
      await userRepository.save(newUser);
      return newUser;
    } catch (err) {
      throw err;
    }
  },

  async getUsers() {
    try {
      const users = await userRepository.find();
      return users;
    } catch (err) {
      throw err;
    }
  },

  async getUserById(id: number) {
    try {
      const user = await userRepository.findOneBy({ id });
      return user;
    } catch (err) {
      throw err;
    }
  },

  async updateUser(id: number, updateData: { name: string; age: number }) {
    try {
      const user = await userRepository.findOneBy({ id });
      if (!user) {
        return null;
      }
      userRepository.merge(user, updateData);
      await userRepository.save(user);
      return user;
    } catch (err) {
      throw err;
    }
  },

  async deleteUser(id: number) {
    try {
      const result = await userRepository.delete(id);
      return (result.affected ?? 0) > 0;
    } catch (err) {
      throw err;
    }
  }
};
