import sha1 from 'sha1';
import { User, userSignInPayload } from './auth.interface';
import { AuthError, ConflictError, NotAuthorizedError } from "../../commons/error";
import userModel from '../../utils/db/userdb/userdb.model';

export default class AuthRepository {
  private userModel = userModel;

  public async addUser(userPayload: User) {
    const { firstName, lastName, email, phoneNumber, password } = userPayload;

    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new ConflictError();
    }

    const hashedPassword = sha1(password);
    const newUser = await this.userModel.create({ firstName, lastName, phoneNumber, email, password: hashedPassword });

    return newUser;
  }

  public async signUser(userPayload: userSignInPayload) {
    const { email, password } = userPayload;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new AuthError('User does not exist');
    }

    const hashedPassword = sha1(password);
    if (hashedPassword !== user.password) {
      throw new NotAuthorizedError();
    }

    return user;
  }
}