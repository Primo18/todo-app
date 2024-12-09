import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authRepository from '../repositories/authRepository.js';

const register = async ({ username, email, password }) => {
    const existingUser = await authRepository.findUserByEmailOrUsername(email, username);
    if (existingUser) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await authRepository.createUser({ username, email, password: hashedPassword });
};

const login = async ({ email, password }) => {
    const user = await authRepository.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '4h' });
    return token;
};

export default { register, login };
