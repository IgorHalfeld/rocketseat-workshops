import { Product } from '../../modules/Product/product.types';
import { User } from '../../modules/User/user.types';

const sendEmail = (products: Product[], user: User, message: string) => {
  products.forEach(product => {
    console.log(`
      Email sent for ${user.name}
      --------------------------
      ${message.trim()}
    `);
  });
};

export const sendSuccessEmail = sendEmail;
export const sendFailureEmail = sendEmail;