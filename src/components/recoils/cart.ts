import { atom, selectorFamily } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: new Map(),
});

export const cartItemSelector = selectorFamily({
  key: 'cartItem',
  get:
    //id에 맞는 carts를 얻을 수 있음


      (id: string) =>
      ({ get }) => {
        const carts = get(cartState);
        return carts.get(id);
      },
  set:
    (id: string) =>
    ({ get, set }, newValue) => {
      //cartState 전체를 바꿈
      if (typeof newValue === 'number') {
        //새로운 map배열 생성
        const newCart = new Map([...get(cartState)]);
        console.log(newCart);
        //newValue와 id를 넣는다.
        newCart.set(id, newValue);
        //다시 재배치
        set(cartState, newCart);
      }
    },
});
