import User from '../models/User';
import { Transaction } from 'sequelize';

class UserRepository {
    public async findById(id: number) {
        return await User.findByPk(id);
    }

    public async updateBalance(id: number, newBalance: number, options?: { transaction?: Transaction }) {
        const user = await this.findById(id);
        if (user) {
            user.balance = newBalance;
            await user.save(options);
        }
    }
}

export default new UserRepository();
