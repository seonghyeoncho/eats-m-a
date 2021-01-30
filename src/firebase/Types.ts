export interface store {
  info: {
    name: string;
    address: string;
    phone: string;
  };

  menu: {
    단품: [
      {
        name: string;
        price: number;
        optionGroup: [1, 2];
      }
    ];
    세트메뉴: [
      {
        name: string;
        price: number;
        optionGroup: [1, 2];
      }
    ];
  };

  optionGroups: [];

  orders: [];
}
