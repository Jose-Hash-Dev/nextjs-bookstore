export type BookType = {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  price: string;
  alt: string;
  stock: string;
  pages: string;
  languages: [
    {
      id: number;
      name: string;
    }
  ];
  categories: [
    {
      id: number;
      name: string;
    }
  ];
  authors: [
    {
      id: number;
      name: string;
    }
  ];
};

export type UserType = {
  id: number;
  name: string;
  surname: string;
  email: string;
  image: string;
  createdAt: string;
};

export type OrderType = {
  id: number;
  products: [{ id: number; name: string }];
  createdAt: string;
  user: {
    id: number;
    name: string;
    surname: string;
    email: string;
  };
  deliveryMethod: {
    id: number;
    name: string;
  };
  orderStatus: {
    id: true;
    name: string;
  };
  paymentMethod: {
    id: number;
    name: string;
  };
};

export type RoleType = {
  id: number;
  name: string;
};

export type DialogViewTypes = {
  authors: [
    {
      id: number;
      name: string;
    }
  ];
  languages: [
    {
      id: number;
      name: string;
    }
  ];
  categories: [{ id: number; name: string }];
  roles: [
    {
      id: number;
      name: string;
    }
  ];
  dialogTitle: string;
  isProductRendered: boolean;
};
