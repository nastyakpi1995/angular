import Status from '@app/models/status';
import Role from '@app/models/role';

export default class User {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  birthday: Date;
  registerDate: Date;
  status: Status;
  token: string;
  verifyEmailSent: Date;
  roles: Role[];
}
