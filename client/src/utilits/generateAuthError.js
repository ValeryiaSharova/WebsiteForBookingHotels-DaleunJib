export default function generateAuthError(error) {
  switch (error) {
    case 'INVALID_DATA': {
      return 'You have entered incorrect data.';
    }
    case 'EMAIL_EXISTS': {
      return 'A user with this email already exists.';
    }
    case 'EMAIL_NOT_FOUND': {
      return 'Email or password entered incorrectly.';
    }
    case 'INVALID_PASSWORD': {
      return 'Email or password entered incorrectly.';
    }
    default: {
      return 'Too many login attempts. Try later.';
    }
  }
}
